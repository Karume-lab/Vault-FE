import Favorites from "./Favourites";
import MyVault from "./MyVault";
import Recents from "./Recents";
import Settings from "./Settings";
import Storage from "./Storage";
import Trash from "./Trash";
import Archived from "./Archived";
import Tags from "./Tags";
import SharedWithMe from "./SharedWithMe";
import { useSnackbar } from "notistack";
import { useEffect } from "react";


const MainContent = ({ active, account, contract, files, setFiles }) => {
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const getdata = async () => {
            try {
                const dataArray = await contract.getFiles();
                if (dataArray && dataArray.length > 0) {
                    setFiles(dataArray);
                    enqueueSnackbar("Fetched files successfully", { variant: "success" });
                } else {
                    enqueueSnackbar("No file(s) to display", { variant: "info" });
                }
            } catch (error) {
                enqueueSnackbar("You don't have access", { variant: "error" });
                console.error(error);
            }
        };
        getdata();
    }, [account, contract, enqueueSnackbar, setFiles]);

    const components = {
        1: <MyVault files={files} active={active} account={account} contract={contract} />,
        2: <SharedWithMe active={active} account={account} contract={contract} />,
        3: <Recents files={files} active={active} account={account} contract={contract} />,
        4: <Favorites files={files} active={active} account={account} contract={contract} />,
        5: <Tags files={files} active={active} account={account} contract={contract} />,
        6: <Storage files={files} active={active} account={account} contract={contract} />,
        7: <Archived files={files} active={active} account={account} contract={contract} />,
        8: <Trash files={files} active={active} account={account} contract={contract} />,
        9: <Settings files={files} active={active} account={account} contract={contract} />,
    };

    return (
        <div className="h-full overflow-y-auto">
            {components[active]}

        </div>
    );
}

export default MainContent;
