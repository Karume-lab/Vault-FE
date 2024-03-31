import Favorites from "./Favorites";
import MyVault from "./MyVault";
import Recents from "./Recents";
import Settings from "./Settings";
import SignOut from "./SignOut";
import Storage from "./Storage";
import Tags from "./Tags";
import SharedWithMe from "./SharedWithMe";
import { useSnackbar } from "notistack";
import { useEffect } from "react";


const MainContent = ({ active, account, contract, files, setFiles }) => {
    const { enqueueSnackbar } = useSnackbar();

    const getdata = async () => {
        let dataArray;
        try {
            dataArray = await contract.getFiles(account);
        } catch (error) {
            enqueueSnackbar("You don't have access", { variant: "error" });
            console.error(error);
        }
        if (!dataArray) {
            setFiles(dataArray);
            enqueueSnackbar("Fetched files successfully", { variant: "success" });
        } else {
            enqueueSnackbar("No file(s) to display", { variant: "info" });
        }
    };

    const timestamp2DateTime = (timestamp) => {
        let date;
        if (timestamp.toString() === "0") {
            date = null;
        } else {
            date = new Date(timestamp * 1000).toUTCString();
        }
        return date;
    };

    useEffect(() => {
        const getdata = async () => {
            try {
                const dataArray = await contract.getFiles(account);
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
        1: <MyVault files={files} setFiles={setFiles} account={account} contract={contract} />,
        2: <SharedWithMe files={files} setFiles={setFiles} account={account} contract={contract} />,
        3: <Recents files={files} setFiles={setFiles} account={account} contract={contract} />,
        4: <Favorites files={files} setFiles={setFiles} account={account} contract={contract} />,
        5: <Tags files={files} setFiles={setFiles} account={account} contract={contract} />,
        6: <Storage files={files} setFiles={setFiles} account={account} contract={contract} />,
        7: <Settings files={files} setFiles={setFiles} account={account} contract={contract} />,
        8: <SignOut files={files} setFiles={setFiles} account={account} contract={contract} />,
    };

    return (
        <>
            {components[active]}
        </>
    );
}

export default MainContent;
