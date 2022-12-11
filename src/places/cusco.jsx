import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Cusco() {
    return (
        <>
            <p style={{textAlign: 'center', fontFamily: 'optima',  fontSize: 20, fontWeight: 550}}>Cusco</p>
            {/* <div style={{ width: "100%", height: 500 }}>
                <LazyLoadImage delayTime={300} alt="island" effect="blur" height={500} width={"100%"} src={Split} />
            </div>
            <div style={{ width: "100%", height: 500 }}>
                <LazyLoadImage alt="island" effect="blur" height={500} width={"100%"} src={Falls} />
            </div>
            <div style={{ width: "100%", height: 500 }}>
                <LazyLoadImage alt="island" effect="blur" height={500} width={"100%"} src={Water} />
            </div> */}
        </>
    );
}