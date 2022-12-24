import PlaceTemplate from "./place_template"

export default function Lima() {
    return (
        // this is so scuffed but works for now
        // doesn't work because when passing string as a prop it becomes variable and react gets upset
        <PlaceTemplate name={"Lima"} imagePlace={require.context("../images/Lima", false, /\.(png|jpe?g|svg|JPE?G|HEIC)$/)}/>
    )
}