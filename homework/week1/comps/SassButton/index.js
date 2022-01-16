import { useTheme } from '../../utils/provider';
const SassButton = ({
    bg=null
}) =>{
    const {theme} = useTheme();
    console.log(theme);

    return <div className={`sass-button-${theme}`}>

        <label>Cat Mode</label>
        <p>Cute cat with season modes ฅ(ﾐᗜᆽᗜﾐ)∫</p>
        <img src="https://o.remove.bg/downloads/c5c9ecf7-47d3-4189-b79d-e6cefd31f878/fdf8a6ada913d2a734aa4520ee4e9b2f-removebg-preview.png" />
    </div>
}

export default SassButton;