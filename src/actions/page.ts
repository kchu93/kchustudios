export enum PageActionTypes {
    'UPDATE_CURRENT_PATH' = 'UPDATE_CURRENT_PATH'
}

export function updateCurrentPath(currentPath: string) {
    return {
        payload: {
            currentPath,
        },
        type: PageActionTypes.UPDATE_CURRENT_PATH,
    }
}
