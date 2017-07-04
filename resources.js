var c = document.getElementById("canvas")
var ctx = c.getContext("2d")

var bgsrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAALQCAIAAABAH0oBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcEAgEEMXwI9gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAKjklEQVR42u3BMQEAAADCoPVP7W8GoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA3NUYAAXmXClUAAAAASUVORK5CYII=';
var babbymapsrc = "data:image/png;base64,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";

var b20x20src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACSklEQVQ4jaWVzUtUURjGf+fcO/c6fThmH4piIn3RB4SEuCiwrYugRbUKoj/AVav+Alet2rlxUyDWImhREUFBToQG2kIwKrPJQIJhxnLG+3HO2+LiONPMxJQPvIvzct7nPM9zzuWq8YzGV9DpKdPnOzqlQNEaBIgEcoGx+VCcQMB1gcF2V474GfpmP7L56AF2dbUlQt3bS9vlq+SGjupPQVHmirFS092uHd7rqIOjN1vU1Rg/nkzy9qcRPdCmVffUDCYMd1TdU1kG2rRS8wOe9I9cqcstM3m/oZLg3SwbYzdwTgzW9AVYefUQLYANg7pqBv/cEJ3ZRUwY1s0I4MYCcbnU9GbXRobRB/YnKjZKHHr6MlH6fg732MkahbGAawVMEKCQhoRRsYC7Z3eycKqO7diHCTarCBVWwI0ENpay+IfPNiT8sl7ChstYYxh+8abSj1MelEuVdfB1gUjANYARS2llHsTiZvpQfrqy8cLnXGPlhTwihriYA6UBwbCVISSWlcKsf6sZnO9J4aV1YssaTi/HAPTPLLB0pgOUAqSSoTYixEJdbSE02z2jHBavXUriTKfrZoxIYjmW5t9vhEJbA8AvK1ycfrydY9XBAtuWzV8Iz6+FDfszaYXX5dUQVixHAhG11Qz558/IDvioLq92pmJZwALqj2f4ut//C209hMSpW5aEXf/TeD0sUBbQEwUzGkjyhnZSgQgTBTOqAO50OuGpXTrl/Kc6AyyWbHQrb7zqyz0+1u7c7nG4rlv8B1iB74Z7d9fNOPAB4DdI3XE+e87c1gAAAABJRU5ErkJggg=="

var hotsopressatasrc =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABTCAYAAABKxvOUAAAFS0lEQVR4nO2dv27bMBDGPxYBEiAGmiBDOnXwlqWD9+x5k+59gAx5gOx5k+7ZM2TpZqBT4SFIAjRAM7FDfPKZPlLUP0tH8jfJkkWL/HSnuxMlA4VCQQ+GFqy1Yx5HJ05nRzvrXt7eadHtmEFLNIyRMR/d+zTycQzGyfFhtXx7dYHbqwv6aLErdnIka7HEy9u7BcCFxY+fv2ixkfVqGCOy2IORj2MoKgVOjg8rt8wEBTq4ZA2kZLFbHbi+nAMAbu6XADbX3JPjQ8Ouv43QMEZksSkIe3I6O3oGNmL6IJHR0lqf//5rs9teSSV4+kqifv92jtXrG1avb94vM+HVnsWxaBb2y+ns6DfwIWodi/kZFvOzWqtOBa3CHpzOjv4A9e43V7QKOwM2op5/Pq428GViMT/b02FNBxXpjpCnPvMP/LrKl12RH5ZPvR/bVNFqsbUuWLLcnFBhsQ5bEa0bBbuCkhvOyVoBncLi+nIupjW5WylHmyv25p+xQRMrUiSNNmHFSDiExwUnXScGFApLhCpMwMZaF/OzSty1tSYvKqDrGmvJWkMpDbDtgh1Rs0GlxXIx6+rDDllYK6BU2BCSteaISmF9FuorHebmhgGlwvp4WD5VVipYazZuGEhEWH7NzbHgL6FF2ORvjPeNFmG3iv5uitMwMs4CNcI2JXeXrKlAIVIK/zJqLDY2Zck5d+VoEXYrVQldT3O9/+qiRdgKV9QSNMmoEjZGRLLU3IMnVcJ2DJSyyoVVCQt8iCvlsSFyegKAUCVsl2J+bhPLNQnrLeL7XLR7nV2Lm4XVahI2mohUJ3lxVQrbJOXxWC2QuLgqno9lj3hYYPfpulC07CtYtHlWtjwfOxwGaHd3p8Zyp3tWt0SbsBVt5hVL4qYqsDZXDKwH333Mo84dPyyftuYY+wi56OKKh6Ua8CbTUPkE8hCpBFcaLZYQJ5ATsRPJfUhPDRSL3RNdKlH0TopUbxZonkFhsHaXZJ11kbFrpamKCii3WACmj8ngkvVqLz9qFxaA7JJjcls+wZzwuee2b3MbC83BE6dKgYjYVCgEBVAk6pTHiFD1yr0IYQkxx3WJEfrmfklWqmKMiCSiYgEDfIhy97gSb8oDjedJWSisSqk4GxtYLKfqUN0r+VzxyVrddxxbayf/YFfq7ysGNietvXtcAfC7aL7u7nG1Eyg57zlWQcrCEpXAbvTMLZnEZ/tYoP3byMcmZVdch9RhA1SpjXXXT3mMCFVRcSGeVKPiwpoibKLwgMA669zPfeLz+/sIUGL75fte3+PSZdyr79KldCrpjqpIUxOxwvr+RmwIK2/zW94I19Nmk2PYiY4brHe3taFuPADAkqXS9phrLB9AqdE+6fpb0n5SmzHtuG26+8b+VpexCrW3dYzWWsMrY9xi6cx3z8Qh8yDfWZ8jvY6z64q5kPsY6FTFbCNSr95w7OApVUY/YUsemyjSmSW54lCkVxeRSoTcfZvfqovO2xyj71ia/lbTsWjanri91IoTo9SKE6f34MkYs2X6sbMOWIKtElbSs+vPo3aoV4vlnaKOuUIX9sOg6Y501tZYdGxpMFSFaRps1O0f3T7vG1/mfWzr0ZrSe/AUckXuNv557YpjI0S3IhZbu64rvjQtzkh3V6Jd8RBue7DgaU8u2MJfwy1gIFe8tkBrjLEDuZrY3FDaT6qHx24PtR3FvmKOwdKdkYMnA79Fu+ula6Zve5s7RZuGheByKHqPiksUPA0GC55YuyZmuxM8iceIuOCmS/kzpvQofoePX2gMpBN/iOBpMiVFT1SshrHHjyglxcQpwhYKmvgP0ihu8WaNy14AAAAASUVORK5CYII="

var testmap_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAAUCAIAAACReYBMAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcEASsb0Vl3cgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAErUlEQVR42u2dS3bkIAxFqd7/MjPOEpKe1amTxC4hCfFk3zdMXLbMR1yEwGMghBBCCCGE5PUYY3x/f1uvfjx2GWo3srT4jgvkh8H2K8sqIlLvidWxpVG1a07K/e7xeNRfdlJuz5+//v31nkfXH/3k6D4WG87/ZXni0UMFWwvqLk3HiBBjtB/cwSxjgfw2OBfcg8bE77yiRgqalv6wJEVjxuKyoPbzvSxXxqeyUyw+xdlxG4zsbpkwwO4IcEcIcAfcl0BtDbiXveZqmxObWbuhSMQ1TAHr3oi7j90jxOzoJj6sdwT70W1pO9gSoHaErgnu9aanmxdxT1nRuKbu0h433dVhrjH2bPcOLYrxz9YYia+nxN2HLXUnl90h+NvCemJLANwRuiy4V1q/NP8+ZUoQtFB5JD5ZOsDFX9VHdJxGWiDYAc1Gdn87f4j/a3YFoL7l2Lf0oJoeWjAgIsSg3Anch1JGcs36YErIfCqMp9BEjtj9ZHHWt6C/d8xYvZIQvL9s9v9Swyzzxsi21Eg83tKpfbcNziIKaqfFYQaAu6P8AXeELg7uW4btdQbYd9fV+DudMc+xLrFxAAg+PTGPf9GWALL/RzjXxX2Qy+yE/GRaWxB3F2kw7fZsFNjsHt3WvQXUjtAtwH3sC+rUP3cK3ONnsPQF9y3svoKSgzHOshK4T/a/Yy/pVNqMcfloav4wUkPyK/bYVDYewRzL9LdYN0s/aQnGkQhwRwhwz3+Z7RmcjkwPS37nLNy3BvexO+4uQo1oqdMsYPe3J0QFc+WV2d2dQ1hG+XfobsZmMMX3UDtCPmi5FLinvFJNRrvbkrijnIqXtAD3c2bdeATNrtH0PhGFXW9tBPQsdv/xx6xguc/yYM7MyAgVE8Ft0UlnD4ikshC6Kbi7X0xwt5Od3R1fSA1eowPus40eGFWzSjxj/mju58gCjyyYZOXGDFd6fXpGfk0jgQWnCjM3eX0qBkRNIdQS3Ff07fR7Kpwf/3a8zAL30eRUmUR2z9pKpQmjOlY1+kJt+hmOsydFuqE/ce9pyhHvu9qJwsrMdgvTk5QSwR1qR2iYEwSEwP1ijngvfySC+2h4jvuuuLsmjEpZJTsP9IH7Onaf2o6yd0/qorh7blNZ5xDEB4V1uaOOoNi6rQgIXYDXp/inH7jv6vP3BPeOs9JKdtdsFWpWdTxOO5JG4iZ+Y50Gc+tH6kpCLrtvP/q9yxRUv0fD5Qi5/YnvczTq4F7sGjYWlt17nnO5YwNr37lpSh6n+OCtOR2PnAenDC7B5PUp2h6pufVvfzW1q/vPn6TsAq9pJ5rfDLkkuwPuCPnci34UrEcWoyC4n9O5LxU+pSRrVs9FPnQqNawKWtUddxJPX5ni3Zrcev0JORJkdw72QWiFD3wmC+iD+z99v7+3pP58+pFJryjwKotLdR+X/kPnF1xgaNcx5tUSQasuAGQnr2Bh67f0fNQ9HXOJKVJXCdsEfAKqrCOfD6d+ETLq8/Pz6+vr4+OjRZdp8Pn0XukHXQ7vsxu8bnGg+xTiWRSMjmUdMJ7ybvwY6orc+qHxBQCa6807EULo1R/+du9XznG/s8tbl8bNsIoQQgghhH7rP6J/GRsHtuy8AAAAAElFTkSuQmCC"
var testmap_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAIAAACxN37FAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcEAiAYqeJBWgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAL/0lEQVR42u2d25LbOg5FZZX+/5czDznTleqkbV5w2QDXfkzcNkUuQiAIgteFUCO9ruv69evX1le8XvQjEtFNFyCARgigEQJohAAaATRCAI0QQCME0AgBNAJohAAaIYBGyEMG2XYIOQI6mcuJhUbSNM9aW4BGfWgGaNSKZoBGrWgGaNSK5uu6ntzFKQEWZEjzf0Dvn3KFS6RAs5mFNmlKgOEPeG+0eTUFP4gVQo/T9MJmoxSDeMfPaYT8Xu/2CGKbT/MWdhowQvOUobyzHgYhj6XXU6WhmNh+L0OP9r9qNRege/TwlMmbeuc/Io0GJjwNXZdjqukAdNTDepu5p/oDqM2TuvMzZtfJ+8GfBpMS64htDgX6/cMA0Akvh7jkCIwfQIvTnLyxYtUyhKehbqGx09DsbQdzTCZMV/SDxfskweXA90DeehKnHUnuqA/QSG1u9Ji9mUD/7sHZDsJqIlGg9ZlbayFT7jigGct+3o7IougpxzGTQfCFoLPEf6pwzMJOeUbpPPLDuKI2NF9qp77X4h4s2nrTnLZT+OvXL5OkKvYRoTnf5bDNDzzq3HjFN4bsAD1qKAd0Gb7E5ixSNjdPChyDvfmx4+ILCjJhxF+eTyTKC87xCb5HoQfUH44nYAw2F3nUYRKZRTUSJJ36wjxSAdPH2ub8ykkecTfsdKJ/X6jzp+PQtsVP0+cJamZKHkOaA4Ar1LmbcTERN6zci/EpRLNVF7eMvrmUpi3o5t1WTy67SkBHLVpe+wYgC6/l7mZ/pBbNLnU5Ni9KK/SebczoYJfKZYSKFDzvZ0hOMO3Vw6N32NTBnz52cRmpp8FDVjEquQZ+ZAOhgQvXpNBMzGBwU0Rnl0PtXY/vAc1Xs1Jg4ncUaaZlN0uSudOHBzuNbVax0H/2hQ5Jcdd5FI/itUxgtB8SEbJ1jtfLvsqapXlNAH05nx0synTpKwlrnfuyB1rK5lV39KFZAugr6UYwmD7cb/a9NKjEwbJyTMd4L1UzQl1Lgb1erxTPOOzmRmxzad3LvRNPNkxDs73Lkf5a7+17QHO0D63ADUwfZZsL3CS7zxlMn+NplAR6lrlNn/jb97c8itLGb+5wBOvrGZyGJGCwPSZJ3XOBYbqLzs790Woc9zi5bNrRVyN/DXyz4T+6AEPd4bEysZ2Gv2dGaNalQQrPc7LvQYHWGkBXzPKDZoBO9gdKMw3NBXzolGKnRZPR2l9TNP7hpxDEwIFtrmGhI/e91eZV1/sCz7LQ4omgg6Dkbphjm0OB9htFXuXQHAF0v+CabL08aHb0oduH1dTQOZDmuPTRc7Y8RBg60zYHLQpde5abLqA51IeuvuYrxDE0u/vQhj2b7lFAyekuh9omCCijdaANtxtOo5nLEeWATry2HsOMjIFuQDMosygcQgHDjAovCg+nOcAVJkK3oxua1awRNActCmvRnIvFGpfQnAk0BGObWwH9u94UyEJzHx8amk1aC80qLoe3kRbMRcY2q7/r9tlqfxfbwgOeec+2Qv8/Vvy1rDTn+v6B5kwLfYUXIa8O7sftVWj2GB3jm2SXyWh5NvFN3VRozgd6CrupRuzfJyk7GH8/GjQLAe3B9NqOWrBNxVFuC/TsKt6QHkOOgawr0M/ybwwyoVD1C3wPol+WlX2a4RgLXe8B4BjZAC1YmgOU0b3GDTSnLwyQjQ+t6TR7hNv8FqPE8vzG4qVAcyLKWSFtmM4HWhAd2TJOg2kCMJ0GtGDNJKd9+OCGwXQC0GpVZkz2KdNphmkPoIvV5VBGec0r+33qB6bjohyRZ1VqOcqGawyYzrfQmne5KtP81ba/P4ydTrbQs9z0vo1lbY1BqrTHyN7eI+23rVia5n/+e3ypk356Usb4HJpZIwbrNh/I4IuyxWl+37yfXBHsdIKF/nM43yx36lrlb8/y7RddnxQ7Hb0o/Cdh3gOQfoBlat7uH6mE6YVxf/kNv6YN3g8LGu6bjnwVTCdsfZ+5gNt/QGDNAfqqXzpD2bkH6wSgTVxPaAZr7169p763Yjip0NEsonURUQ4TUEpkcuqsELDWy736dO0Fq8jaFFtWeyJvghvEPcxcjkIop9AcY5bYR8y30DEHUX//SsyWR4CR/vgT2OkIH/pvqtQqhQZcBfvth76+yjaidw7T+T70xxb8MxU44EUfRnOAu4KdjrPQgit3w+3onwywk/dFfQ+tKIdCd9vS/O3bxn33y/qCJey0e5Tjz56NOauSS/OaFbHtFuIe7hZaxGAo5wmZ34WHnXax0L1pXjh+4vdOwE4bA63cfWfmcML0Jb71/Wa3DJrxPf49+vHeheuNE940e8Qlbe8Ku9rF8uLCdlMd51pCXNk2x58gPtlOu0MWg3IkzYNlkPY/eY0VFmyflxdx8eZgv4flB8fb5hGedrprtkbmT/OkAdMJQF+f0jOa0ZzlbS98bQOmc7a+swJG5WgOhuw0f1o9wf+oCN3r/1qeJ2+YPgToqkewDOv5zkYhPKIWOwlP2GkXHzrYPJvY5vHV1cLnx51dk08OvtAqMi1UH7oczYb/Hu+AfYT1BN/jLkdzyvcY/vSU0TXnrz3TdzmaTfKbZzFaXo2ZJ4gPzpNjmX4OpLno2+bbF+6sTRuvEW9oVn7k9zcl7Jj8rnb6PpPmWYw2V2Oyc6kf0/eBNAfr43bJvls88iuHMP06mWbXOPTO5z8mxnws5TM7GZRfMjnJSU4LpgDb7LRTaJuc9BPQVr+izHSN6qOG50M3PY3Zv20ZHGgT93jFoOk6LzX9ZlfvaLAKwsKvVOxMGwvt+uQtI3ROLhB2ehdonfsIm9H8JueO/Gkvl0OfZpECvgtHSxZ+1+9cjA7Tjtl24jR737tzzr0+dePTKic+9jNCgwdgOUqz1viYaLemnVa8eNOquSmexmafjAC0H69Y/hX9MwFpcegApHRo1vHTZomfQrbcGvE24TjGuVTr1q9H3u8B5eSnWv70vY9yJzu32QOyq8bNczGFmL5LQDZyWq4KPbOPIPJoVZi+vVHrapudnnT2yFaYv1eFaffzeZE0S3V3Ssw+YAsmfo3olT461VkmEyCl/nQJoDcrQW42NZhpx3xoq4tNNe/ZHsyvd8p08wb6sjgKkMJ0DtC2rSzhNy/bvM18uv36SSadHMa074mVAKarrAKt3vsmJ8dSOjCGad9SYLa3oJaOacwG2hSKibWPe9zeM2aKiXIROo/aSJsvyfgbRKWY9tqtXZghOkkwHi2x9ROc0qDLuXaWQF+TKZTmHW34zYbL/zDHd7PNiQe9dIG+7O502nzInezKGGvntJJb4DJg9hYGOsVR2S88/rFQS7CRfm8XYuZVj7oc6nesOPXFn5mfMcvf2WaXSOIT1K0825ppswT6x65zunMIoN2ZHqwOajt+JnltTmE+LLquyzHIzTcsnHz6r7QNW1zelHZemISy+zUpDUgA+s3qbYqbzYrfVl54A5/HaVGYsudy69Bszs3g+IkfFdmxgumzLp7pW8dC5Pb7P13beFy8jWj87A1m+lGgef9m7J9Ctj/1ZlZelML+3PKdQ8uNj6yFIHFmO6Bu0NpguCZgxF9Za+vYhJ1zkdsp3C/TrzaWVnPDJBPfuxPSz25p7RR63El1iAbDOIUWtQH+9J1Os/gCfwqXyKICI4tawU72ZvqlQ7PhufzxvzVcEn10kWczBBXklyRoe6TaHeiAO6msPO/IBMBZt1i/8ufOQM+Wb00DWuGAu+sxVb+vFUxW9lt0DjKdvCg8dg3nh07XTCMPf/ouTbPOAn/2evBa2Pl1sjnTr7o0Lzudfouz8YXj1EkwNX/a43ioVfHEVwOaDccm8uD3YF7/Ib7cG6YTgK6yZk9cje0cbTxkcfIT09FAx1QHLLqQn+qKnWZsJquYP6ZhfDr00qAF12dzQ79l6QnDqTJYtWftr7y/cD8vz7HQTGJaz7Wd2rbQ2v2txCuqjLn5G8n2C78xHRSH3skIHW/iWmj27/+NvGH2p3SOkXOQKcXy1LQTy7s9aD5KU1NuPIFu8IKVAFuwY56vjSuU1v7wVqY5N5+OqVvRTt9ONOdSErZvd0LplqK+B0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBA6Qf8DU5jP8KMTS2oAAAAASUVORK5CYII=";

var mapsrc = new Image();
mapsrc.src = testmap_3;

var background = new Image();
background.src = bgsrc;

var playersprite = new Image();
playersprite.src = b20x20src;

var sprites = {
  brick : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYeEQ41+56XYQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABEUlEQVRIx+2WQUrDQBSGv5e8gp0EdONGvEjBnTulPY2XsqALvYDQE7i029geQE2tEPJcNIgZojMqZlH9IQQe3+RP5v2TGVlOMuOdjm+euXuouZ9khLQ3AHdRsgywkkDLpG7uCXGqI1h1Gn6QAWUFmYJEGD9VkKUgDSz+dHW+rRmH1yuKsSOVsM3BVcn8xJGrfGlWfqReTNQsricAZl5KPhtjmws2fbRf/5LF2NFeJ2vmjzWFV+/S7kDIL0sWAVbFS8tb7CJSlESy25OufhqvEgdWBt9l/38rfzVd09FOq3B2+0KxMs69epcyhdPZmmmA1aP91BsoCIZf/2iPB4LsFm1auXa75hEHjGGz2EJsL+l6Bd/dUpEbRgCnAAAAAElFTkSuQmCC',
  cobblestone : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcBADUeQ24mJwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEY0lEQVQ4y11Vy47TShCtdr/s+JlkkpBECCGx4XP5KvZIbBAgDSDNYDmTsXv86PddFDdC9M7druo6dc6pJh8+fACAYRiWZYkxcs4BwFrLOU+SBABCCM6579+/b7fbGGOWZavVKoTAGIsxCiEIISEEAGBaa631NE3n89k5hykopQDgvQcAY8y3b9+klLvdLsYYY6SU/glmbFmWJEnKsjTGsL7vpZTr9Xq/38/zPAxDCMEYA/+vHz9+AMD79+/rusYUfy9rbdd10zSlacqstcfjcbPZKKVeXl5uP5VlSQj5+vXrPM/v3r0TQgAAIeTvRFg+Yww/WVEUWZaFEDARpVRKmaap914ppZQ6Ho+UUu89Qv5njePonMuyzDnHpmninD89Pd2OOefe+67rlFKMMUopY2y/3xNCsHZKaZIkWmvvvdY6SZIYIyGE5Xn++PjonMNqnXPTNBljhBBpmuZ5jn8vyyKEaJomz3Pn3LIswzAAgHOu7/ssy9brNSvLsm1bKaVzTgjhnPPeV1XlvUeaYox93xtjiqLgnGutl2Wx1l4uF6XU4+Pj6XTy3nPO2TiOUsokSYQQ2CwAUErFGKWU3vtpmhCR1to5F2NUSlVVxRi7u7s7nU4AcL1e53lmhJCmabBTWmvMJaXUWgMA3tH3PSGkLEskoa7r1WqFZRJCEOw8z0lVVVJKJBsTcc7rupZS/vr1axzHNE2rqirLEsWltV6tVng37hRFIYQIITDOuRAixoj6pJSWZRljbNvWWvv69essy5B4AHh5eYkxpmnqnHPOEULqup6mSUrZ933Stq1zDlWHoIwxXddZa3e7HcoqxjhN09PT0/V67bqOMVaWZVEUANB1XQjh7u4uhMAIIdfrFZVirUWal2VB4J8+ffLe53mO4jbGnM/njx8/vn37drfboVbQ/N57JoQYx1EpxTnHgMvlwjk/HA593+92u2VZ0jTF7m632xDC4XB4eHjoui7P8xCClPJ6vT48PDC0JaW0KApEiuy0beu932w2+/3eGCOl3G63ADBNE8LXWldVhX0siuJ8PrP1eq21ppTeWrZerwHg/v5+u902TUMpxbpunu+6DgDevHnDGEMX53lOKf1jq7Is/zEtEl+WZdM0f5+2bZtlWVVViAY30SSJcy6EgPMM9YVnaZoaY758+dJ1Hbr35mRU0zzPfd/j5jiOQggWQrDWYnAIQWttjNFa13VdVVXf95fL5ffv30jO8/Pz6XR69eoVAPz8+dNai8OaUlpVFYsxaq0/f/5cFMUwDGmaojGrqgKANE3TNMXUaED05jzPdV0jJkynlGI4MI/Ho9b6cDigJZdlMcZYaxljUsobdjx6fn5umubv/WEY8jxnhBAp5Wq14pxba29eo5RqrfM8z7IMVYpuJ4QQQjabDefcOYc8SimVUgkKnXOOMTfTUkqFEMYYnKv41qFicTYgtFtIlmUMp+D9/X1d17fnB0XgnEOkOB6EENbapmm89/M8o73xlUQx/wcSqAXRPoVFPAAAAABJRU5ErkJggg=='
}

function sprite(x,y,src){
  this.x=x
  this.y=y
  this.img = new Image
  this.img.src = src
}

var bgSprites = [];
var fgSprites = [];

var sassage = new Image();
sassage.src = hotsopressatasrc;
