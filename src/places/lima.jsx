import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Lima() {
    return (
        <>
           <p style={{textAlign: 'center', fontFamily: 'optima',  fontSize: 20, fontWeight: 550}}>Lima</p>
            {/* <div style={{ width: "100%", height: 300 }}>
                <LazyLoadImage delayTime={300} alt="island" effect="blur" height={300} width={"100%"} src={DubrovnikIsland} />
            </div>
            <div style={{ width: "100%", height: 300 }}>
                <LazyLoadImage delayTime={300} alt="island" effect="blur" height={300} width={"100%"} src={Roof} />
            </div>
            <div style={{ width: "100%", height: 500 }}>
                <LazyLoadImage delayTime={300} alt="island" effect="blur" height={500} width={"100%"} src={Rocks} />
            </div> */}
        </>
    );
}