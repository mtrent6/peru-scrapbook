import PlaceTemplate from "./place_template"

export default function MachuPicchu() {
    return (
        // this is so scuffed but works for now
        // doesn't work because when passing string as a prop it becomes variable and react gets upset
        <PlaceTemplate name={"Machu Picchu"} imagePlace={require.context("../images/Machu_Picchu", false, /\.(png|jpe?g|svg|JPE?G|HEIC)$/)}/>
    )
}