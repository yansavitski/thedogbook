import './withInfinityScroll.scss'

import { Loading } from 'components/Loading/Loading'
import debounce from 'lodash.debounce'
import React, { useEffect } from 'react'
import { ReducersState } from 'store/types'

const OFFSET_BEFORE_LOAD = 200
const DEBOUNCE_WAIT = 100

interface WithInfinityScrollProps {
  hasMore?: boolean
  onLoad: () => void
  status: ReducersState
}

export const withInfinityScroll = <TProps extends object>(
  Component: React.ComponentType<TProps>,
): React.FunctionComponent<TProps & WithInfinityScrollProps> => {
  const WithInfinityScroll: React.FunctionComponent<TProps &
    WithInfinityScrollProps> = ({
    status,
    onLoad,
    hasMore = true,
    ...properties
  }: TProps & WithInfinityScrollProps) => {
    const isLoading = status === ReducersState.loading
    const failedLoad = status === ReducersState.failed

    useEffect(() => {
      const handleScroll = debounce(() => {
        if (
          !isLoading &&
          !failedLoad &&
          hasMore &&
          window.innerHeight +
            document.documentElement.scrollTop +
            OFFSET_BEFORE_LOAD >
            document.documentElement.offsetHeight
        ) {
          onLoad()
        }
      }, DEBOUNCE_WAIT)

      window.addEventListener('scroll', handleScroll)

      return (): void => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [isLoading, failedLoad, onLoad])

    return (
      <div className="WithInfinityScroll">
        <Component {...(properties as TProps)} />

        {isLoading && <Loading className="WithInfinityScroll-loading" />}
        {failedLoad && (
          <div className="WithInfinityScroll-error">
            Oops! Something went wrong
          </div>
        )}
        {!hasMore && (
          <div className="WithInfinityScroll-end">You reached the end!</div>
        )}
      </div>
    )
  }

  return WithInfinityScroll
}
