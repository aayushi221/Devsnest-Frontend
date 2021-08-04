React
CSS MODULES

[fileName].module.css

import stles from Button.module.css

How to use [ className={styles.className} ]

ref- https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87

ref2 https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/



useEffect()

we pass a function inside useEfect()

The callback functions waht should happen when some component changes

clean UP in useEffect just add return at the bottom of useEffect()

This function runs before any thing happens in useEffect callback- to clean up the previous values

return () { console.log(reuturn from resouce) }

useEffect(() => { console.log("render")
return () {
    console.log("clearing the prev values, clean up function")
}
})



Deploy

https://create-react-app.dev/docs/deployment/
