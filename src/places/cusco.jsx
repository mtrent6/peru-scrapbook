import PlaceTemplate from './place_template';

export default function Cusco() {
    return (
        // this is so scuffed but works for now
        // doesn't work because when passing string as a prop it becomes variable and react gets upset
        <PlaceTemplate name={"Cusco"} imagePlace={require.context("../images/Cusco_and_Sacred_Valley", false, /\.(png|jpe?g|svg|JPE?G|HEIC)$/)}/>
    )
}