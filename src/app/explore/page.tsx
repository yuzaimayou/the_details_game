export default async function ExplorePage(){
    const res= await fetch('https://api.rawg.io/api/games?key=2d79db2850bc483b9a7eae971eff1392')
    const json=await res.json()
    console.log(json)
    return (
        <div></div>
    )
}