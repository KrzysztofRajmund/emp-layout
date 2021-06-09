import React, { useEffect } from 'react';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


const Profit: React.FC = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 900,
        });
    }, []);

    return (
        <>
            <section className="profit">
                <article className="profitCard">
                    <h2 data-aos="fade-right">Skorzystaj z najszybciej<br />
                     rozwijającej się gałęzi medycyny.</h2>
                    <p data-aos="fade-left">
                        Teleporada lekarska na naszym serwisie oznacza potwierdzoną skuteczność<br />
                        terapeutyczną, oszczędność czasu i pieniędzy.
                </p>
                </article>
            </section>
            <hr></hr>
        </>
    )
}
export default Profit;
