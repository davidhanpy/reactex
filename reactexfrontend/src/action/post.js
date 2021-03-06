export function initPost(textArr) {
    return {
        type: 'INIT_POST',
        textArr,
    };
}
export function initComment(textArr) {
    return {
        type: 'INIT_COMMENT',
        textArr,
    };
}
export function writePost(textObj) {
    return {
        type: 'WRITE_POST',
        data: textObj,
    };
}

export function writeComment(textObj) {
    return {
        type: 'WRITE_POST',
        data: textObj,
    };
}

export function deletePost(id) {
    return {
        type: 'DELETE_POST',
        id,
    };
}
