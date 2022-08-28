const POST_GRAPHQL_FIELDS = `
slug
date
title
subtitle
excerpt
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
coverImage{
  url
  contentfulMetadata{
    tags{
      name
    }
  }
}
coverImageAuthor
coverImageAuthorUrl
metadata:contentfulMetadata{
  tags{
    name
  }
}
participants:participantCollection{
  items{
    title
    url
    file{
      url
      contentType
    }
  }
}
participantTextSection
results:resultCollection{
  items{
    title
    url
    file{
      url
      contentType
    }
  }
}
resultTextSection
docTextSection
docs:docCollection{
  items{
    title
    url
    file{
      url
      contentType
    }
  }
}
docTextSection
otherDocs:otherDocCollection{
  items{
    title
    url
    file{
      url
      contentType
    }
  }
}
otherDocTextSection
hero
showInHome
author{
  name
  picture{
    url
  }
}
moreInfoText
moreInfoUrl
gallery:galleryCollection{
  items{
    title
    type
    link
    author{
      name
      link
    }
  }
}
sponsors:sponsorCollection{
  items{
    name
    website
    organizer
    sponsor
    collaborator
    logo{
      contentType
      url
    }
  }
}
`

const HEROPOST_GRAPHQL_FIELDS = `
title
subtitle
content {
  json
}
picture{
  url
}
docs: documentsCollection {
  items{
    title
    fileName
    url
  }
}
`

const AGENDA_GRAPHQL_FIELDS = `
slug
title
date
metadata:contentfulMetadata{
  tags{
    name
  }
}
`

const COACH_GRAPHQL_FIELDS = `
name
`

const GROUP_GRAPHQL_FIELDS = `
name
id
description
information
schedule {
  json 
}
coachesIntroduction
coaches: coachesCollection {
  items {
    name
    picture {
      url
    }
    role: speciality
    quote
  }
}
categories: categoriesCollection {
  items {
    name
  }
}
groups: eventsGroupsCollection {
  items {
    name
    events: eventsCollection {
      items {
        name
      }
    }
  }
}
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractHeroPost(fetchResponse) {
  return fetchResponse?.data?.heroPostCollection?.items?.[0]
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items
}

function extractCoachEntries(fetchResponse) {
  return fetchResponse?.data?.coachCollection?.items
}

function extractGroupEntries(fetchResponse) {
  return fetchResponse?.data?.trainingGroupCollection?.items
}

function extractGroup(fetchResponse) {
  return fetchResponse?.data?.trainingGroupCollection?.items?.[0]
}

function extractAgendaEntries(fetchResponse) {
  return fetchResponse?.data?.agendaCollection?.items
}

function extractAgenda(fetchResponse) {
  return fetchResponse?.data?.agendaCollection?.items?.[0]
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPostEntries(entries)
}

export async function getGroupWithName(name) {
  console.log(name)
  const entry = await fetchGraphQL(
    `query {
      trainingGroupCollection(where: { name: "${name}" }) {
        items {
          ${GROUP_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractGroup(entry)
}

export async function getGroupWithId(id) {
  console.log(id)
  const entry = await fetchGraphQL(
    `query {
      trainingGroupCollection(where: { id: "${id}" }, preview: false, limit: 1) {
        items {
          ${GROUP_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractGroup(entry)
}

export async function getRecentPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${
        preview ? 'true' : 'false'
      }, limit:5, where:{hero:false}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPostEntries(entries)
}

export async function getActiveHeroPost(preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { hero: true}, preview: ${
        preview ? 'true' : 'false'
      }, limit:1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPost(entry)
}

export async function getPoster(preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { poster: true}, preview: ${
        preview ? 'true' : 'false'
      }, limit:1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPost(entry)
}

export async function getNextAgenda() {
  const entries = await fetchGraphQL(
    `query {
      agendaCollection(where:{date_gte:"2022-09-01"}, order:date_ASC) {
        items {
          ${AGENDA_GRAPHQL_FIELDS}
        }
      }
    }`,
    false
  )
  return extractAgendaEntries(entries)
}

export async function getAllCoaches(preview) {
  const entries = await fetchGraphQL(
    `query {
      coachCollection(order: name_DESC, preview: ${
        preview ? 'true' : 'false'
      }) {
        items {
          ${COACH_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractCoachEntries(entries)
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  }
}
