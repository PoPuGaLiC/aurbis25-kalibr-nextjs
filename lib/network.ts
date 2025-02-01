type ErrorProp = undefined | boolean | null | string | object

export interface IPropsWithStatus {
   error?: ErrorProp,
   isLoading?: boolean
}

// функция-предикат, возвращает boolean
// испльзуем в компоненте
export function isGoodProps( props: IPropsWithStatus ): boolean{ 
    return !props.error && !props.isLoading
}
