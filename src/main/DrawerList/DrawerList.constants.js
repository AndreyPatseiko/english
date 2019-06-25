import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";

export default [
  {
    title: "1. Transcription",
    icon: <InboxIcon />,
    parentPath: "/phonetics",
    insertNav: [
      {
        title: "Consonant",
        path: "/phonetics/consonant"
      },
      {
        title: "Vowel",
        path: "/phonetics/vowel"
      }
    ]
  },
  {
    title: "2. The technique of memorizing words",
    icon: <InboxIcon />,
    parentPath: "/technic",
    insertNav: [
      {
        title: "1 lesson",
        path: "/technic/1"
      },
      {
        title: "2 lesson",
        path: "/technic/2"
      }
    ]
  }
];
