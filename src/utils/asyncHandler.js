const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(error => next(error))
}

// const asyncHandler = (myFunc) => async (req, res, next) => {
//     try {
//         await myFunc(req, res, next)
//     } catch(err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

export { asyncHandler }