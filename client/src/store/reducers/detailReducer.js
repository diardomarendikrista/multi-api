const initialState = {
  detail: {},
  loading: true,
  error: false
}

export default function reducer (state = initialState, action) {
  const { type, payload } = action;
  if (type === "detail/setDetail") return { ...state, detail: payload }
  if (type === "loadingDetail/setLoadingDetail") return { ...state, loading: payload }
  if (type === "errorDetail/setErrorDetail") return { ...state, error: payload }
  return state;
}
