import type { Blog } from '@/types/Blog';

export default function blogs(
  _req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { data: Blog[] }): void;
        new (): any;
      };
    };
  }
) {
  res.status(200).json({
    data: [
      {
        id: 1,
        title: 'Blog1',
        subTitle: 'sub Blog1',
        desc: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
        img: 'https://api.lorem.space/image/face?w=200&h=200',
      },
      {
        id: 2,
        title: 'Blog2',
        subTitle: 'sub Blog2',
        desc: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
        img: 'https://api.lorem.space/image/face?w=200&h=200',
      },
      {
        id: 3,
        title: 'Blog3',
        subTitle: 'sub Blog3',
        desc: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
        img: 'https://api.lorem.space/image/face?w=200&h=200',
      },

      {
        id: 4,
        title: 'Blog4',
        subTitle: 'sub Blog4',
        desc: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
        img: 'https://api.lorem.space/image/face?w=200&h=200',
      },
    ],
  });
}
