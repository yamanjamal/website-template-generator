/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
  MutationServiceOptions,
  QueryServiceOptions,
} from '../../interfaces/common'
import { WebsiteData } from './website.types'
import { AxiosResponse } from 'axios'

const prefix = '/website'

export const _WebsiteService = {
  genrateWebsite: () => {
    return {
      useMutation: (options?: MutationServiceOptions<WebsiteData, any>) =>
        useMutation((payload) => axios.post(`${prefix}/`, payload), options),
    }
  },
  getWebsiteSections: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient()
    const queryKey = ['sections']
    return {
      useQuery: (options?: QueryServiceOptions<AxiosResponse<WebsiteData>>) =>
        useQuery([queryKey], () => axios.get(`/sections`), options),
      invalidate: () => queryClient.invalidateQueries([queryKey]),
      queryKey,
    }
  },
}
