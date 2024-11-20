import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Login } from "../component/login";
import { Signup } from "../component/signUp";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="header">
            <div className="header__logo"><strong>DoDoGram</strong></div>
        </div>
        <div className="container">
            
            

            <div className="main">
                <div className="main__image1"><img src="https://exoplanetes.umontreal.ca/wp-content/uploads/2022/11/Pillars_Feat.jpg"/>
                    <div className="main__text-1">1/8</div>
                    <div className="main__text-2">09/28/24</div>
                    <div className="main__text-3">The Pillars of Creation in our universe..🤯🤔 </div>
                </div>
            </div>
            <div className="main">
                <div className="main__image1"><img src="https://cdn.mos.cms.futurecdn.net/KNGZRXySsM7quLuNUa6C4h.jpg"/>
                    <div className="main__text-1">2/8</div>
                    <div className="main__text-2">09/28/24</div>
                    <div className="main__text-3">Some of the Galaxy's in the universe</div>
                </div>
            </div>
            <div className="main">
                <div className="main__image1"><img src="https://www.seti.org/sites/default/files/styles/original/public/2018-10/andromeda-galaxy-1440px.jpg"/>
                    <div className="main__text-1">3/8</div>
                    <div className="main__text-2">09/28/24</div>
                    <div className="main__text-3">Our Milky way Galaxy..</div>
                </div>
            </div>
            <div className="main">
                <div className="main__image1"><img src="https://theplanets.org/123/2021/11/solar-system-facts.png"/>
                    <div className="main__text-1">4/8</div>
                    <div className="main__text-2">09/28/24</div>
                    <div className="main__text-3">Our solar systym, wich almos is the limite we can explore🥲😞 in our universe</div>
                </div>
            </div>
            <div className="main">
                <div className="main__image1"><img src="https://parade.com/.image/t_share/MTkwNTgxNDY5Mzk2NjczNjYx/earth-facts-jpg.jpg"/>
                    <div className="main__text-1">5/8</div>
                    <div className="main__text-2">09/28/24</div>
                    <div className="main__text-3">Our beautiful home blue planet earth🥰😘</div>
                </div>
            </div>
            <div className="main">
                <div className="main__image1"><img src="https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/C5D37CA5-E038-46DD-8CD87C9172B5B36F/20C42A46-F186-4A83-84666FA84384F2C3/WebsiteJpg_XL-FENVS_Main%20Visual_Green_Website.jpg"/>
                    <div className="main__text-1">6/8</div>
                    <div className="main__text-2">09/28/24</div>
                    <div className="main__text-3">😍🥰😘</div>
                </div>
            </div>
            <div className="main">
                <div className="main__image1"><img src="https://i0.wp.com/lanzaroteinformation.co.uk/wp-content/uploads/2018/10/AdobeStock_40417799.jpeg?fit=1024%2C768&ssl=1"/>
                    <div className="main__text-1">7/8</div>
                    <div className="main__text-2">09/28/24</div>
                    <div className="main__text-3">Description</div>
                </div>
            </div>
            <div className="main">
                <div className="main__image1"><img src="https://www.bruker.com/en/applications/detection-and-environmental/environmental/_jcr_content/root/overviewstage/desktopImage.coreimg.82.1920.jpeg/1597140428584/nature-environmental-grass-bird.jpeg"/>
                    <div className="main__text-1">8/8</div>
                    <div className="main__text-2">09/28/24</div>
                    <div className="main__text-3">👍122</div>
                </div>
            
            </div>

            <div className="footer">
                    <div className="footer__home"><img src="" alt=""/>Home</div>
                    <div className="footer__search"><img src="" alt=""/>🔍Search</div>
                    <div className="footer__newpost"><img src="" alt=""/>New+Post</div>
                    <div className="footer__feeds"><img src="" alt=""/>Feeds</div>
            </div>
        </div>

		</div>
	);
};
