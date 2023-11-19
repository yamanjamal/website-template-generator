/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseMutationOptions, useQuery } from 'react-query'

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

interface Links {
  first: string
  last: string
  prev?: any
  next?: any
}

interface Link {
  url: string
  label: string
  active: boolean
}

interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

/**
 * Description
 * - this Generic interface is used to wrap an `interface` or `type` by pagination meta data
 *
 * Note
 * - only works with `Laravel`
 */
export interface PagesOf<T = any> {
  data: T[]
  links: Links
  meta: Meta
}

export type Replace<T, K extends keyof T, V> = {
  [P in keyof T]: P extends K ? V : T[P]
}

export type ParameterType<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never

export type QueryServiceOptions<T = any> = ParameterType<
  typeof useQuery<T>
>['2']

export type MutationServiceOptions<Res = never, Req = any> =
  | Omit<UseMutationOptions<Res, unknown, Req, unknown>, 'mutationFn'>
  | undefined
