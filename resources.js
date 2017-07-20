var c = document.getElementById("canvas")
var ctx = c.getContext("2d")

var bgsrc = '';

var coinAnimSrc = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAD1BMVEWzVRL/w00AAADZdxb/88zW3KyIAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhBxQTJjSAnRTnAAAAbUlEQVQY043QwQ3AIAgFUNMNvjiAsoFxAhP2n6mgrbHqof/2PMAX5zSsie7NrIuh8dyRUDQZcZcCLd6YCEEEkF1MGaEiA9U3iVR7OMsm0h/ZwFKGPhsmWReQln6a9c4BB+n/RKxO3C+xaL3gyA1JPR2ECtMxuAAAAABJRU5ErkJggg==",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAElBMVEUAAAD/w00AAADZdxb/88yzVRKG67LFAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhBxQTJw3Gg62uAAAAcUlEQVQY04XQyw2AIBAEUEIHA3gHOsC1ARIqsP9iHBD8JBjnxOMAs6sUExmvRl6KYEyHhogkxIl0ELT4Llfg8kzB8ihwML6plIz8JT5oN6z/QmKbL53/NdWeVngxmr1UBxjifIVtlmvap9peln2+s1sHEVQcnwrrDrIAAAAASUVORK5CYII=",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAElBMVEUAAAD/w00AAADZdxb/88yzVRKG67LFAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhBxQTJxsyVxj/AAAATUlEQVQY02NgAAImJSUlBjhA5SkKCgoqIHjChrh4SsImLoJCCkTxDEWIVWniYmyEi2coQh7P2AQnT1BQBBePQVHENRTJ74KiOHnwEAQAla8VCXzGWqUAAAAASUVORK5CYII=",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAD1BMVEX/88z/w00AAADZdxazVRJctyxTAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhBxQTJyXzNgVUAAAAJElEQVQY02NgAAImJSUFBjhA4ykKDiRP2XggeSouxPJQwgwOAJOeCf23GIA3AAAAAElFTkSuQmCC",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAD1BMVEX/88z/w00AAADZdxazVRJctyxTAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhBxQTJy5k5NzcAAAAQ0lEQVQY02NgAAIlIFBggAFUnqKgoBAKzwgHT0lQ0MUQrhTEE8TDI1KlsSGySgI8R2rwjBFmMqi4IPsdg2eEK8zgPABnnRY3oD1ZXwAAAABJRU5ErkJggg==",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAElBMVEV5cGX/w00AAADZdxb/88yzVRKQLKCCAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhBxQTJzXugRUwAAAAcklEQVQY043QYQqAIAwFYPEGax4g5wlkXUDYBfrR/a/SLEcaBj0Q/GDoeM5pSLM6yyACzdLoAZk5Nw7yETJcs6YgEMpEEViv9dAtkQJlppS56Iu4/RFmYP5Q959PuieybfZWzVTOH0F0N6uC9q6Xl54GT+voHy79TVDeAAAAAElFTkSuQmCC"];

var coinAnimFrames = [];
for (var i = 0; i < coinAnimSrc.length; i++) {
  coinAnimFrames.push(new Image());
  coinAnimFrames[i].src = coinAnimSrc[i];
}


var babbymapsrc = "data:image/png;base64,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";

var b20x20src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACSklEQVQ4jaWVzUtUURjGf+fcO/c6fThmH4piIn3RB4SEuCiwrYugRbUKoj/AVav+Alet2rlxUyDWImhREUFBToQG2kIwKrPJQIJhxnLG+3HO2+LiONPMxJQPvIvzct7nPM9zzuWq8YzGV9DpKdPnOzqlQNEaBIgEcoGx+VCcQMB1gcF2V474GfpmP7L56AF2dbUlQt3bS9vlq+SGjupPQVHmirFS092uHd7rqIOjN1vU1Rg/nkzy9qcRPdCmVffUDCYMd1TdU1kG2rRS8wOe9I9cqcstM3m/oZLg3SwbYzdwTgzW9AVYefUQLYANg7pqBv/cEJ3ZRUwY1s0I4MYCcbnU9GbXRobRB/YnKjZKHHr6MlH6fg732MkahbGAawVMEKCQhoRRsYC7Z3eycKqO7diHCTarCBVWwI0ENpay+IfPNiT8sl7ChstYYxh+8abSj1MelEuVdfB1gUjANYARS2llHsTiZvpQfrqy8cLnXGPlhTwihriYA6UBwbCVISSWlcKsf6sZnO9J4aV1YssaTi/HAPTPLLB0pgOUAqSSoTYixEJdbSE02z2jHBavXUriTKfrZoxIYjmW5t9vhEJbA8AvK1ycfrydY9XBAtuWzV8Iz6+FDfszaYXX5dUQVixHAhG11Qz558/IDvioLq92pmJZwALqj2f4ut//C209hMSpW5aEXf/TeD0sUBbQEwUzGkjyhnZSgQgTBTOqAO50OuGpXTrl/Kc6AyyWbHQrb7zqyz0+1u7c7nG4rlv8B1iB74Z7d9fNOPAB4DdI3XE+e87c1gAAAABJRU5ErkJggg=="

var hotsopressatasrc =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABTCAYAAABKxvOUAAAFS0lEQVR4nO2dv27bMBDGPxYBEiAGmiBDOnXwlqWD9+x5k+59gAx5gOx5k+7ZM2TpZqBT4SFIAjRAM7FDfPKZPlLUP0tH8jfJkkWL/HSnuxMlA4VCQQ+GFqy1Yx5HJ05nRzvrXt7eadHtmEFLNIyRMR/d+zTycQzGyfFhtXx7dYHbqwv6aLErdnIka7HEy9u7BcCFxY+fv2ixkfVqGCOy2IORj2MoKgVOjg8rt8wEBTq4ZA2kZLFbHbi+nAMAbu6XADbX3JPjQ8Ouv43QMEZksSkIe3I6O3oGNmL6IJHR0lqf//5rs9teSSV4+kqifv92jtXrG1avb94vM+HVnsWxaBb2y+ns6DfwIWodi/kZFvOzWqtOBa3CHpzOjv4A9e43V7QKOwM2op5/Pq428GViMT/b02FNBxXpjpCnPvMP/LrKl12RH5ZPvR/bVNFqsbUuWLLcnFBhsQ5bEa0bBbuCkhvOyVoBncLi+nIupjW5WylHmyv25p+xQRMrUiSNNmHFSDiExwUnXScGFApLhCpMwMZaF/OzSty1tSYvKqDrGmvJWkMpDbDtgh1Rs0GlxXIx6+rDDllYK6BU2BCSteaISmF9FuorHebmhgGlwvp4WD5VVipYazZuGEhEWH7NzbHgL6FF2ORvjPeNFmG3iv5uitMwMs4CNcI2JXeXrKlAIVIK/zJqLDY2Zck5d+VoEXYrVQldT3O9/+qiRdgKV9QSNMmoEjZGRLLU3IMnVcJ2DJSyyoVVCQt8iCvlsSFyegKAUCVsl2J+bhPLNQnrLeL7XLR7nV2Lm4XVahI2mohUJ3lxVQrbJOXxWC2QuLgqno9lj3hYYPfpulC07CtYtHlWtjwfOxwGaHd3p8Zyp3tWt0SbsBVt5hVL4qYqsDZXDKwH333Mo84dPyyftuYY+wi56OKKh6Ua8CbTUPkE8hCpBFcaLZYQJ5ATsRPJfUhPDRSL3RNdKlH0TopUbxZonkFhsHaXZJ11kbFrpamKCii3WACmj8ngkvVqLz9qFxaA7JJjcls+wZzwuee2b3MbC83BE6dKgYjYVCgEBVAk6pTHiFD1yr0IYQkxx3WJEfrmfklWqmKMiCSiYgEDfIhy97gSb8oDjedJWSisSqk4GxtYLKfqUN0r+VzxyVrddxxbayf/YFfq7ysGNietvXtcAfC7aL7u7nG1Eyg57zlWQcrCEpXAbvTMLZnEZ/tYoP3byMcmZVdch9RhA1SpjXXXT3mMCFVRcSGeVKPiwpoibKLwgMA669zPfeLz+/sIUGL75fte3+PSZdyr79KldCrpjqpIUxOxwvr+RmwIK2/zW94I19Nmk2PYiY4brHe3taFuPADAkqXS9phrLB9AqdE+6fpb0n5SmzHtuG26+8b+VpexCrW3dYzWWsMrY9xi6cx3z8Qh8yDfWZ8jvY6z64q5kPsY6FTFbCNSr95w7OApVUY/YUsemyjSmSW54lCkVxeRSoTcfZvfqovO2xyj71ia/lbTsWjanri91IoTo9SKE6f34MkYs2X6sbMOWIKtElbSs+vPo3aoV4vlnaKOuUIX9sOg6Y501tZYdGxpMFSFaRps1O0f3T7vG1/mfWzr0ZrSe/AUckXuNv557YpjI0S3IhZbu64rvjQtzkh3V6Jd8RBue7DgaU8u2MJfwy1gIFe8tkBrjLEDuZrY3FDaT6qHx24PtR3FvmKOwdKdkYMnA79Fu+ula6Zve5s7RZuGheByKHqPiksUPA0GC55YuyZmuxM8iceIuOCmS/kzpvQofoePX2gMpBN/iOBpMiVFT1SshrHHjyglxcQpwhYKmvgP0ihu8WaNy14AAAAASUVORK5CYII="

var testmap_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAAUCAIAAACReYBMAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcEASsb0Vl3cgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAErUlEQVR42u2dS3bkIAxFqd7/MjPOEpKe1amTxC4hCfFk3zdMXLbMR1yEwGMghBBCCCGE5PUYY3x/f1uvfjx2GWo3srT4jgvkh8H2K8sqIlLvidWxpVG1a07K/e7xeNRfdlJuz5+//v31nkfXH/3k6D4WG87/ZXni0UMFWwvqLk3HiBBjtB/cwSxjgfw2OBfcg8bE77yiRgqalv6wJEVjxuKyoPbzvSxXxqeyUyw+xdlxG4zsbpkwwO4IcEcIcAfcl0BtDbiXveZqmxObWbuhSMQ1TAHr3oi7j90jxOzoJj6sdwT70W1pO9gSoHaErgnu9aanmxdxT1nRuKbu0h433dVhrjH2bPcOLYrxz9YYia+nxN2HLXUnl90h+NvCemJLANwRuiy4V1q/NP8+ZUoQtFB5JD5ZOsDFX9VHdJxGWiDYAc1Gdn87f4j/a3YFoL7l2Lf0oJoeWjAgIsSg3Anch1JGcs36YErIfCqMp9BEjtj9ZHHWt6C/d8xYvZIQvL9s9v9Swyzzxsi21Eg83tKpfbcNziIKaqfFYQaAu6P8AXeELg7uW4btdQbYd9fV+DudMc+xLrFxAAg+PTGPf9GWALL/RzjXxX2Qy+yE/GRaWxB3F2kw7fZsFNjsHt3WvQXUjtAtwH3sC+rUP3cK3ONnsPQF9y3svoKSgzHOshK4T/a/Yy/pVNqMcfloav4wUkPyK/bYVDYewRzL9LdYN0s/aQnGkQhwRwhwz3+Z7RmcjkwPS37nLNy3BvexO+4uQo1oqdMsYPe3J0QFc+WV2d2dQ1hG+XfobsZmMMX3UDtCPmi5FLinvFJNRrvbkrijnIqXtAD3c2bdeATNrtH0PhGFXW9tBPQsdv/xx6xguc/yYM7MyAgVE8Ft0UlnD4ikshC6Kbi7X0xwt5Od3R1fSA1eowPus40eGFWzSjxj/mju58gCjyyYZOXGDFd6fXpGfk0jgQWnCjM3eX0qBkRNIdQS3Ff07fR7Kpwf/3a8zAL30eRUmUR2z9pKpQmjOlY1+kJt+hmOsydFuqE/ce9pyhHvu9qJwsrMdgvTk5QSwR1qR2iYEwSEwP1ijngvfySC+2h4jvuuuLsmjEpZJTsP9IH7Onaf2o6yd0/qorh7blNZ5xDEB4V1uaOOoNi6rQgIXYDXp/inH7jv6vP3BPeOs9JKdtdsFWpWdTxOO5JG4iZ+Y50Gc+tH6kpCLrtvP/q9yxRUv0fD5Qi5/YnvczTq4F7sGjYWlt17nnO5YwNr37lpSh6n+OCtOR2PnAenDC7B5PUp2h6pufVvfzW1q/vPn6TsAq9pJ5rfDLkkuwPuCPnci34UrEcWoyC4n9O5LxU+pSRrVs9FPnQqNawKWtUddxJPX5ni3Zrcev0JORJkdw72QWiFD3wmC+iD+z99v7+3pP58+pFJryjwKotLdR+X/kPnF1xgaNcx5tUSQasuAGQnr2Bh67f0fNQ9HXOJKVJXCdsEfAKqrCOfD6d+ETLq8/Pz6+vr4+OjRZdp8Pn0XukHXQ7vsxu8bnGg+xTiWRSMjmUdMJ7ybvwY6orc+qHxBQCa6807EULo1R/+du9XznG/s8tbl8bNsIoQQgghhH7rP6J/GRsHtuy8AAAAAElFTkSuQmCC"
var testmap_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAIAAACxN37FAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcFEgwVSviSXAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAMBUlEQVR42u2d25LbOg5FZZX+/5czDznTleqkbV5w2QDXfkzcNkUuQiAIgteFUCO9ruv69evX1le8XvQjEtFNFyCARgigEQJohAAaATRCAI0QQCME0AgBNAJohAAaIYBGyEMG2XYIOQI6mcuJhUbSNM9a23vpZ+hqpEjzItB4KEiTZlwO1IpmgEataL6u68ldnBJgQYY0/wf0/ilXuEQKNJtZaJOmBBj+gPdGm1dT8INYIfQ4TS9sNkoxiHf8nEbI7/VujyC2+TRvYacBIzRPGco762EQ8lh6PVUaiont9zL0aP+rVnMBukcPT5m8qXf+I9JoYMLT0HU5ppoOQEc9rLeZe6o/gNo8qTs/Y3advB/8aTApsY7Y5lCg3z8MAJ3wcohLjsD4AbQ4zckbK1YtQ3ga6hYaOw3N3nYwx2TCdEU/WLxPElwOfA/krSdx2pHkjvoAjdTmRo/Zmwn07x6c7SCsJhIFWp+5tRYy5Y4DmrHs5+2ILIqechwzGQRfCDpL/KcKxyzslGeUziM/jCtqQ/Oldup7Le7Boq03zWk7hb9+/TJJqmIfEZrzXQ7b/MCjzo1XfGPIDtCjhnJAl+FLbM4iZXPzpMAx2JsfOy6+oCATRvzl+USivOAcn+B7FHpA/eF4AsZgc5FHHSaRWVQjQdKpL8wjFTB9rG3Or5zkEXfDTif694U6fzoObVv8NH2eoGam5DGkOQC4Qp27GRcTccPKvRifQjRbdXHL6JtLadqCbt5t9eSyqwR01KLltW8AsvBa7m72R2rR7FKXY/OitELv2caMDnapXEaoSMHzfobkBNNePTx6h00d/OljF5eReho8ZBWjkmvgRzYQGrhwTQrNxAwGN0V0djnU3vX4HtB8NSsFJn5HkWZadrMkmTt9eLDT2GYVC/1nX+iQFHedR/EoXssERvshESFb53i97KusWZrXBNCX89nBokyXvpKw1rkve6ClbF51Rx+aJYC+km4Eg+nD/WbfS4NKHCwrx3SM91I1I9S1FNjr9UrxjMNubsQ2l9a93DvxZMM0NNu7HOmv9d6+BzRH+9AK3MD0Uba5wE2y+5zB9DmeRkmgZ5nb9Im/fX/Loyht/OYOR7C+nsFpSAIG22OS1D0XGKa76OzcH63GcY+Ty6YdfTXy18A3G/6jCzDUHR4rE9tp+HtmhGZdGqTwPCf7HhRorQF0xSw/aAboZH+gNNPQXMCHTil2WjQZrf01ReMffgpBDBzY5hoWOnLfW21edb0v8CwLLZ4IOghK7oY5tjkUaL9R5FUOzRFA9wuuydbLg2ZHH7p9WE0NnQNpjksfPWfLQ4ShM21z0KLQtWe56QKaQ33o6mu+QhxDs7sPbdiz6R4FlJzucqhtgoAyWgfacLvhNJq5HFEO6MRr6zHMyBjoBjSDMovCIRQwzKjwovBwmgNcYSJ0O7qhWc0aQXPQorAWzblYrHEJzZlAQzC2uRXQv+tNgSw09/GhodmktdCs4nJ4G2nBXGRss/q7bp+t9nexLTzgmfdsK/T/Y8Vfy0pzru8faM600Fd4EfLq4H7cXoVmj9Exvkl2mYyWZxPf1E2F5nygp7CbasT+fZKyg/H3o0GzENAeTK/tqAXbVBzltkDPruIN6THkGMi6Av0s/8YgEwpVv8D3IPplWdmnGY6x0PUeAI6RDdCCpTlAGd1r3EBz+sIA2fjQmk6zR7jNbzFKLM9vLF4KNCeinBXShul8oAXRkS3jNJgmANNpQAvWTHLahw9uGEwnAK1WZcZknzKdZpj2ALpYXQ5llNe8st+nfmA6LsoReVallqNsuMaA6XwLrXmXqzLNX237+8PY6WQLPctN79tY1tYYpEp7jOztPdJ+24qlaf7nv8eXOumnJ2WMz6GZNWKwbvOBDL4oW5zm9837yRXBTidY6D+H881yp65V/vYs337R9Umx09GLwn8S5j0A6QdYpubt/pFKmF4Y95ff8Gva4P2woOG+6chXwXTC1veZC7j9BwTWHKCv+qUzlJ17sE4A2sT1hGaw9u7Ve+p7K4aTCh3NIloXEeUwAaVEJqfOCgFrvdyrT9desIqsTbFltSfyJrhB3MPM5SiEcgrNMWaJfcR8Cx1zEPX3r8RseQQY6Y8/gZ2O8KH/pkqtUmjAVbDffujrq2wjeucwne9Df2zBP1OBA170YTQHuCvY6TgLLbhyN9yO/skAO3lf1PfQinIodLctzd++bdx3v6wvWMJOu0c5/uzZmLMquTSvWRHbbiHu4W6hRQyGcp6Q+V142GkXC92b5oXjJ37vBOy0MdDK3XdmDidMX+Jb3292y6AZ3+Pfox/vXbjeOOFNs0dc0vausKtdLC8ubDfVca4lxJVtc/wJ4pPttDtkMShH0jxYBmn/k9dYYcH2eXkRF28O9ntYfnC8bR7haae7Zmtk/jRPGjCdAPT1KT2jGc1Z3vbC1zZgOmfrOytgVI7mYMhO86fVE/yPitC9/q/lefKG6UOArnoEy7Ce72wUwiNqsZPwhJ128aGDzbOJbR5fXS18ftzZNfnk4AutItNC9aHL0Wz47/EO2EdYT/A97nI0p3yP4U9PGV1z/tozfZej2SS/eRaj5dWYeYL44Dw5lunnQJqLvm2+feHO2rTxGvGGZuVHfn9Two7J72qn7zNpnsVoczUmO5f6MX0fSHOwPm6X7LvFI79yCNOvk2l2jUPvfP5jYszHUj6zk0H5JZOTnOS0YAqwzU47hbbJST8BbfUrykzXqD5qeD5009OY/duWwYE2cY9XDJqu81LTb3b1jgarICz8SsXOtLHQrk/eMkLn5AJhp3eB1rmPsBnNb3LuyJ/2cjn0aRYp4LtwtGThd/3Oxegw7ZhtJ06z970759zrUzc+rXLiYz8jNHgAlqM0a42PiXZr2mnFizetmpviaWz2yQhA+/GK5V/RPxOQFocOQEqHZh0/bZb4KWTLrRFvE45jnEu1bv165P0eUE5+quVP3/sod7Jzmz0gu2rcPBdTiOm7BGQjp+Wq0DP7CCKPVoXp2xu1rrbZ6Ulnj2yF+XtVmHY/nxdJs1R3p8TsA7Zg4teIXumjU51lMgFS6k+XAHqzEuRmU4OZdsyHtrrYVPOe7cH8eqdMN2+gL4ujAClM5wBt28oSfvOyzdvMp9uvn2TSyWFM+55YCWC6yirQ6r1vcnIspQNjmPYtBWZ7C2rpmMZsoE2hmFj7uMftPWOmmCgXofOojbT5koy/QVSKaa/d2oUZopME49ESWz/BKQ26nGtnCfQ1mUJp3tGG32y4/A9zfDfbnHjQSxfoy+5Op82H3MmujLF2Tiu5BS4DZm9hoFMclf3C4x8LtQQb6fd2IWZe9ajLoX7HilNf/Jn5GbP8nW12iSQ+Qd3Ks62ZNkugf+w6pzuHANqd6cHqoLbjZ5LX5hTmw6LruhyD3HzDwsmn/0rbsMXlTWnnhUkou1+T0oAEoN+s3qa42az4beWFN/B5nBaFKXsutw7N5twMjp/4UZEdK5g+6+KZvnUsRG6//9O1jcfF24jGz95gph8Fmvdvxv4pZPtTb2blRSnszy3fObTc+MhaCBJntgPqBq0NhmsCRvyVtbaOTdg5F7mdwv0y/WpjaTU3TDLxvTsh/eyW1k6hx51Uh2gwjFNoURvgT9/pNIsv8KdwiSwqMLKoFexkb6ZfOjQbnssf/1vDJdFHF3k2Q1BBfkmCtkeq3YEOuJPKyvOOTACcdYv1K3/uDPRs+dY0oBUOuLseU/X7WsFkZb9F5yDTyYvCY9dwfuh0zTTy8Kfv0jTrLPBnrwevhZ1fJ5sz/apL87LT6bc4G184Tp0EU/OnPY6HWhVPfDWg2XBsIg9+D+b1H+LLvWE6Aegqa/bE1djO0cZDFic/MR0NdEx1wKIL+amu2GnGZrKK+WMaxqdDLw1acH02N/Rblp4wnCqDVXvW/sr7C/fz8hwLzSSm9VzbqW0Lrd3fSryiypibv5Fsv/Ab00Fx6J2M0PEmroVm//7fyBtmf0rnGDkHmVIsT007sbzbg+ajNDXlxhPoBi9YCbAFO+b52rhCae0Pb2Wac/PpmLoV7fTtRHMuJWH7dieUbinqeyCEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgihE/Q/tXjR8M7P+rMAAAAASUVORK5CYII=";

var testmap_4 = //"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAAAUCAIAAAAiKxfiAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH4QcIEwMFI38sHQAAAWtJREFUaN7tmt2SgyAMhXMc3/+VsxfbOhRB84Mubs935VRCYjwNhBGqKoR8HwtTQCh9Qih9Qih9Qih9Qih9Qih9Qih9QmYEgAhGSR9MKJlP4W1Zqiog1d0l6oSJfkppwLeoHnL8aUJ1d4154ucPxUrq0FyZt9LWm08AFpO3i3pwxvU8aS8jV1U46/FK+WbI6OYG296wR1cur8TLMlFeLwbLR6/auMULuemFIiTHX6vKdrVFqT3fifrxMa3hUeFyFzAExD69JfixqbgygD8p2/DqB0PL8HnVr4LTTwJ/Zbx4Xdi9u9IUMDQO24IfJ4VulnrvfrvTDMMS29n8MKrwbGS74eno58g2sM8prTZX2+8Ysu3zLgVFQI7CH+gF2ZTHesd9H+kdmdkd7G2but/37r1ThGDVv6jEkvl7x8yPGUkkj25668wl0if/SPdH24wDFeKa8xDjtM1GlmcaqXVsyBsdO9s0KRIRfe4T/QALn8Nqpi5NhAAAAABJRU5ErkJggg==";
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAAAUCAIAAAAiKxfiAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH4QcUFAYrnV4rNQAAAa9JREFUaN7tmUGShSAMRNNzzH9Ar8ksrPqFQCAEcHDsXrjABJQ8oVWEEISi3qcfTgFF9CmK6FMU0acook9RRJ+iiD5F3a0D1sb56HcOs+RWqdfqE6yNIiICQCRFCN5fWhDhv7Ceh1MvjByonR1McXT+VAEQjWcAIpezTvQB7PsbWCv2rRDsszS8YpHKyW4S6zQ8E7hf52E0vhdwD1XlU1qur9K2yysEjwzdUb4zZkGh8yt3ADl18X763voib/DXU3E+D3UTqCxYX+gTdDUncrbHRyv6gBRC7qbEvWt3JZqDb7j9Ihz5uO4racK3ZUHjxd6OfnF/sKB/iRnfaLpu3j2cI7HnBWaugXb09mAHX8F3pKa96Le9ftJduCqrh90fi8VrxkN0TZMj0RimGeiCqT2ME2Kys3EVv2eKE2hx8K3+YaSwFYniPCv81HJ7X0vO+Mgdpe1zvH7vEqvZtfHgKYnvVPyRpP7BxBI54g7y3CL39VW/+ajM+ZvrXpupDU3IlMYRJJJc/2eo6z6zBH3qH3FfsxkVCscBHek2sTfGtyWqtvBMqejc3raZIhEJz72jXxGoDIlvASVtAAAAAElFTkSuQmCC";

var testmap_5 = "";

var mapsrc = new Image();
mapsrc.src = testmap_4;

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
