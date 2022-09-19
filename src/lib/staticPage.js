export const STATICPAGE_GRAPHQL_FIELDS = `
title
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
`
