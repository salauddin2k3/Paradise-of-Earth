import Lottie from "lottie-react";
import MyLottie from "../../public/lottie-react.json"


const LottieReact = () => {
    return (
        <div className="mt-28 border border-gray-300 p-7 rounded-xl">
            <h2 className="font-bold text-center text-4xl">{`Let's conquer the world.......`}</h2>
            <div className="mt-10 w-full">
                <Lottie
                    animationData={MyLottie}
                    loop={true}
                ></Lottie>
            </div>
        </div>
    );
};

export default LottieReact;