import Favorites from "./Favorites";
import MyVault from "./MyVault";
import Recents from "./Recents";
import Settings from "./Settings";
import Share from "./Share";
import SignOut from "./SignOut";
import Storage from "./Storage";
import Tags from "./Tags";
import Trash from "./Trash";

const MainContent = ({ active }) => {
    const components = {
        "My Vault": <MyVault />,
        "Share": <Share />,
        "Recents": <Recents />,
        "Favorites": <Favorites />,
        "Tags": <Tags />,
        "Storage": <Storage />,
        "Trash": <Trash />,
        "Settings": <Settings />,
        "Sign Out": <SignOut />
    };

    return (
        <>
            {components[active]}
        </>
    );
}

export default MainContent;
