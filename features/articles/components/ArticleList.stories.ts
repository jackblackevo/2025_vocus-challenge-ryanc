import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ArticleList from './ArticleList';

const meta = {
  component: ArticleList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    articles: [
      {
        _id: 'post-1',
        title: '誰適合使用 iPhone SE 2020 ？適合買iPhone SE2 族群的十大特徵',
        abstract:
          '我是一個普通的使用者，首次使用IOS系統，分享這五個月的使用心得，還有SE2的優點及缺點，讓有意願購買的朋友，有更多資訊參考。',
        thumbnailUrl:
          'https://resize-image.vocus.cc/resize?norotation=true&quality=40&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1570663725120-fdacd230c500%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3w1Mjg3OTR8MHwxfHNlYXJjaHwzfHxsZXQlMjBpdCUyMGdvfGVufDB8MHx8fDE3MjYwNTk2MzB8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D400&width=400&sign=PNG7rtsxt6Z_6LU2B5SrfBqvwGcbZ1oIxyCfcGESMrM',
        collectCount: 0,
        likeCount: 5,
        user: {
          username: 'test-user',
          fullname: '舒國治',
          avatarUrl:
            'https://resize-image.vocus.cc/resize?norotation=true&quality=40&url=https%3A%2F%2Fimages.vocus.cc%2F8fd7e3c9-d0c8-4abb-a5a5-410a16a6d555.jpg&width=400&sign=_o1wJUUrrVJ2yyJ027BudlKgpuIoLJaAHs1q6wiXXmc',
        },
      },
      {
        _id: 'post-2',
        title: '誰適合使用 iPhone SE 2020 ？適合買iPhone SE2 族群的十大特徵',
        abstract:
          '我是一個普通的使用者，首次使用IOS系統，分享這五個月的使用心得，還有SE2的優點及缺點，讓有意願購買的朋友，有更多資訊參考。',
        thumbnailUrl:
          'https://resize-image.vocus.cc/resize?norotation=true&quality=40&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1570663725120-fdacd230c500%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3w1Mjg3OTR8MHwxfHNlYXJjaHwzfHxsZXQlMjBpdCUyMGdvfGVufDB8MHx8fDE3MjYwNTk2MzB8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D400&width=400&sign=PNG7rtsxt6Z_6LU2B5SrfBqvwGcbZ1oIxyCfcGESMrM',
        collectCount: 0,
        likeCount: 5,
        user: {
          username: 'test-user',
          fullname: '舒國治',
          avatarUrl:
            'https://resize-image.vocus.cc/resize?norotation=true&quality=40&url=https%3A%2F%2Fimages.vocus.cc%2F8fd7e3c9-d0c8-4abb-a5a5-410a16a6d555.jpg&width=400&sign=_o1wJUUrrVJ2yyJ027BudlKgpuIoLJaAHs1q6wiXXmc',
        },
      },
      {
        _id: 'post-3',
        title: '誰適合使用 iPhone SE 2020 ？適合買iPhone SE2 族群的十大特徵',
        abstract:
          '我是一個普通的使用者，首次使用IOS系統，分享這五個月的使用心得，還有SE2的優點及缺點，讓有意願購買的朋友，有更多資訊參考。',
        thumbnailUrl:
          'https://resize-image.vocus.cc/resize?norotation=true&quality=40&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1570663725120-fdacd230c500%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3w1Mjg3OTR8MHwxfHNlYXJjaHwzfHxsZXQlMjBpdCUyMGdvfGVufDB8MHx8fDE3MjYwNTk2MzB8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D400&width=400&sign=PNG7rtsxt6Z_6LU2B5SrfBqvwGcbZ1oIxyCfcGESMrM',
        collectCount: 0,
        likeCount: 5,
        user: {
          username: 'test-user',
          fullname: '舒國治',
          avatarUrl:
            'https://resize-image.vocus.cc/resize?norotation=true&quality=40&url=https%3A%2F%2Fimages.vocus.cc%2F8fd7e3c9-d0c8-4abb-a5a5-410a16a6d555.jpg&width=400&sign=_o1wJUUrrVJ2yyJ027BudlKgpuIoLJaAHs1q6wiXXmc',
        },
      },
      {
        _id: 'post-4',
        title: '誰適合使用 iPhone SE 2020 ？適合買iPhone SE2 族群的十大特徵',
        abstract:
          '我是一個普通的使用者，首次使用IOS系統，分享這五個月的使用心得，還有SE2的優點及缺點，讓有意願購買的朋友，有更多資訊參考。',
        thumbnailUrl:
          'https://resize-image.vocus.cc/resize?norotation=true&quality=40&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1570663725120-fdacd230c500%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3w1Mjg3OTR8MHwxfHNlYXJjaHwzfHxsZXQlMjBpdCUyMGdvfGVufDB8MHx8fDE3MjYwNTk2MzB8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D400&width=400&sign=PNG7rtsxt6Z_6LU2B5SrfBqvwGcbZ1oIxyCfcGESMrM',
        collectCount: 0,
        likeCount: 5,
        user: {
          username: 'test-user',
          fullname: '舒國治',
          avatarUrl:
            'https://resize-image.vocus.cc/resize?norotation=true&quality=40&url=https%3A%2F%2Fimages.vocus.cc%2F8fd7e3c9-d0c8-4abb-a5a5-410a16a6d555.jpg&width=400&sign=_o1wJUUrrVJ2yyJ027BudlKgpuIoLJaAHs1q6wiXXmc',
        },
      },
    ],
  },
};
