import React from 'react';

import '../styles/components/Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_container">
                <ul className="footer_items">
                    <h2 className="title">EEStore</h2>

                    <li className="footer_item">Biz Kimiz</li>
                    <li className="footer_item">Kariyer</li>
                    <li className="footer_item">İletişim</li>
                    <li className="footer_item">EEStore'te Satış Yap</li>
                </ul>

                <ul className="footer_items">
                    <h2 className="title">Kampanyalar</h2>

                    <li className="footer_item">Aktif Kampanyalar</li>
                    <li className="footer_item">Elite Üyelik</li>
                    <li className="footer_item">Hediye Fikirleri</li>
                    <li className="footer_item">EEStore Fırsatları</li>
                </ul>

                <ul className="footer_items">
                    <h2 className="title">Yardım</h2>

                    <li className="footer_item">Sıkça Sorulan Sorular</li>
                    <li className="footer_item">Canlı Yardım</li>
                    <li className="footer_item">Nasıl İade Edebilirim</li>
                    <li className="footer_item">İşlem Rehberi</li>
                </ul>

                <ul className="footer_items">
                    <h2 className="title">Sosyal Medya</h2>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;