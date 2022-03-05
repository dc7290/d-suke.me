export const pagesPath = {
  development: {
    $url: (url?: { hash?: string }) => ({ pathname: '/development' as const, hash: url?.hash }),
  },
  posts: {
    _postId: (postId: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[postId]' as const, query: { postId }, hash: url?.hash }),
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/posts' as const, hash: url?.hash }),
  },
  profile: {
    $url: (url?: { hash?: string }) => ({ pathname: '/profile' as const, hash: url?.hash }),
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash }),
}

export type PagesPath = typeof pagesPath
