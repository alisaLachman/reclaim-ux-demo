import React from 'react';
import classes from './route.module.scss';
export default function Clients() {
    return (
        <div>
            <div className={classes['hero-image']}>
                <div className={classes['image-box']}>
                    <img
                        src="https://static.wixstatic.com/media/11062b_30e14d2591244262980a875ed0017813~mv2.jpg/v1/fit/w_640,h_640/Organic Handmade Soap .jpg"
                        alt="Delicious Margherita Pizza"
                        className={classes.img}
                    />
                </div>
                <div className={classes['content-box']}>
                    <h1 className={classes.title}>Why Our Client&apos;s buy Reclaim</h1>
                    <p className={classes.description}>
                        This is a space to welcome visitors to the site. Grab their attention with
                        copy that clearly states what the site is about, and add an engaging image
                        or video.
                    </p>
                    <div>
                        <button className="button primaryButton">
                            <a href="">Shop All</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.clientsSection}>
                <div className={classes.clientsLogosGrid}>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_5c720747d7354dba80018d7d997449dc.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_2166ae7dd24f43b5b5d81b82723fb514.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_8578952f0104450ab6439b62e80a4e94.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_b38de69a8fef47a4a7b4352eb614e56c.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_6f586dc3ae5c401f94331b8f43d80207.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_933967ebc7324eb1937d9d86b71dc875.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
