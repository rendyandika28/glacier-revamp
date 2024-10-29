import { joinURL, withQuery } from "ufo";
import type { FetchError } from "ofetch";
import { createError, getQuery, getRouterParam, proxyRequest } from "h3";

export default defineEventHandler((event) => {
  const requestedWith = getRequestHeader(event, "x-requested-with");
  const authorization = getRequestHeader(event, "authorization");

  if (requestedWith !== "XMLHttpRequest") {
    throw createError({
      statusCode: 403,
      message: "Forbidden Access",
    });
  }

  const path = getRouterParam(event, "path") ?? "";
  const { apiUrl } = useRuntimeConfig();
  const queryParam = getQuery(event);

  // manipulate path
  const finalPath = path.replace(/^(admin|web|landing)(.*)/, "/api/v1$2");
  const url = withQuery(joinURL(apiUrl, finalPath), queryParam);

  // temporary fix delete method
  if (event.method === "DELETE") {
    try {
      return $fetch(url, {
        headers: {
          authorization,
        },
        method: "DELETE",
      });
    } catch (e) {
      const error = e as FetchError;

      setResponseStatus(event, error.statusCode || 500);
      return error.data;
    }
  }

  return proxyRequest(event, url);
});
