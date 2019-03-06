/**
 * auto generated by graphql-codegen
 * DO NOT EDIT THIS FILE BY HAND
 */

export type Maybe<T> = T | null

export type DateTime = any

// ====================================================
// Documents
// ====================================================

export type EventsQueryVariables = {}

export type EventsQueryQuery = {
  __typename?: 'Query'

  upcomingEvents: EventsQueryUpcomingEvents[]

  upcomingTalks: EventsQueryUpcomingTalks[]
}

export type EventsQueryUpcomingEvents = {
  __typename?: 'Event'

  date: DateTime

  goingCount: number

  url: string

  venue: EventsQueryVenue
}

export type EventsQueryVenue = {
  __typename?: 'EventVenue'

  city: string

  country: string

  lat: number

  lon: number

  name: string

  street: string
}

export type EventsQueryUpcomingTalks = {
  __typename?: 'Talk'

  title: string

  description: string

  date: DateTime

  speaker: EventsQuerySpeaker

  isLightningTalk: boolean

  labels: string[]
}

export type EventsQuerySpeaker = {
  __typename?: 'Speaker'

  name: string

  occupation: string

  socialName: Maybe<string>

  socialUrl: Maybe<string>

  avatarUrl: string
}

export type OrganizersQueryVariables = {}

export type OrganizersQueryQuery = {
  __typename?: 'Query'

  organizers: OrganizersQueryOrganizers[]
}

export type OrganizersQueryOrganizers = {
  __typename?: 'Organizer'

  name: string

  description: string

  twitter: OrganizersQueryTwitter
}

export type OrganizersQueryTwitter = {
  __typename?: 'TwitterAccount'

  name: string

  profileImageUrl: string
}

import gql from 'graphql-tag'
import * as React from 'react'
import * as ReactApollo from 'react-apollo'

// ====================================================
// Components
// ====================================================

export const EventsQueryDocument = gql`
  query EventsQuery {
    upcomingEvents {
      date
      goingCount
      url
      venue {
        city
        country
        lat
        lon
        name
        street
      }
    }
    upcomingTalks {
      title
      description
      date
      speaker {
        name
        occupation
        socialName
        socialUrl
        avatarUrl
      }
      isLightningTalk
      labels
    }
  }
`
export class EventsQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<EventsQueryQuery, EventsQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<EventsQueryQuery, EventsQueryVariables>
        query={EventsQueryDocument}
        {...(this as any)['props'] as any}
      />
    )
  }
}
export type EventsQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<EventsQueryQuery, EventsQueryVariables>
> &
  TChildProps
export function EventsQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EventsQueryQuery,
        EventsQueryVariables,
        EventsQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EventsQueryQuery,
    EventsQueryVariables,
    EventsQueryProps<TChildProps>
  >(EventsQueryDocument, operationOptions)
}
export const OrganizersQueryDocument = gql`
  query OrganizersQuery {
    organizers {
      name
      description
      twitter {
        name
        profileImageUrl
      }
    }
  }
`
export class OrganizersQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<OrganizersQueryQuery, OrganizersQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<OrganizersQueryQuery, OrganizersQueryVariables>
        query={OrganizersQueryDocument}
        {...(this as any)['props'] as any}
      />
    )
  }
}
export type OrganizersQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<OrganizersQueryQuery, OrganizersQueryVariables>
> &
  TChildProps
export function OrganizersQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        OrganizersQueryQuery,
        OrganizersQueryVariables,
        OrganizersQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    OrganizersQueryQuery,
    OrganizersQueryVariables,
    OrganizersQueryProps<TChildProps>
  >(OrganizersQueryDocument, operationOptions)
}