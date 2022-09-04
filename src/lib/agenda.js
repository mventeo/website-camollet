export const AGENDA_GRAPHQL_FIELDS = `
slug
title
date
content {
  json
  links{
    assets{
      block{
        sys{
          id
        }
        url
        description
        contentType
      }
    }
  }
}
metadata:contentfulMetadata{
  tags{
    name
  }
}
`
