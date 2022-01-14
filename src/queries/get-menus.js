import { gql } from "@apollo/client";


export const GET_MENUS = gql`
query MyQuery {
    headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
      edges {
        node {
          label
        }
      }
    }
  }
`
