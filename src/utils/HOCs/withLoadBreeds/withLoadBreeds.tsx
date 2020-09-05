import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadBreeds } from '../../../store/breeds/actions'
import { selectBreedsStatus } from '../../../store/breeds/selectors'
import { ReducersState } from '../../../store/types'

export const withLoadBreeds = <TProps extends object>(
  Component: React.ComponentType<TProps>,
): React.FunctionComponent<TProps> => {
  const WithLoadBreeds: React.FunctionComponent<TProps> = (
    properties: TProps,
  ) => {
    const dispatch = useDispatch()
    const breedsStatus = useSelector(selectBreedsStatus)

    useEffect(() => {
      if (breedsStatus === ReducersState.idle) {
        dispatch(loadBreeds())
      }
    }, [breedsStatus, dispatch])

    return <Component {...properties} />
  }

  return WithLoadBreeds
}
