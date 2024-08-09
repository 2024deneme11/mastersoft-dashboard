import InboxIcon from '@mui/icons-material/Inbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import FolderIcon from '@mui/icons-material/Folder';

export const RightSidebarData = [

    {
      icon: <InboxIcon />, 
      heading: "Inbox", 
      link: "/inbox",
    },
    {
      icon: <CardGiftcardIcon />, 
      heading: "Wishes",
      link: "/wishes",
    },
    {
      icon: <FavoriteIcon />, 
      heading: "Favorites",
      link: "/favorites",
    },
    {
      icon: <DeleteIcon />, 
      heading: "Trash",
      link: "/trash",
    },
    {
      icon: <PhoneIcon />, 
      heading: "Contact",
      link: "/contact",
    }
  ]
