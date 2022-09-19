import type { Program } from '@/types/Program';

export default function programs(
  _req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { data: Program[] }): void;
        new (): any;
      };
    };
  }
) {
  res.status(200).json({
    data: [
      {
        id: 1,
        title: 'Program1',
        desc: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
        img: 'https://api.lorem.space/image/face?w=200&h=200',
      },
      {
        id: 2,
        title: 'Program2',
        desc: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
        img: 'https://api.lorem.space/image/face?w=200&h=200',
      },
      {
        id: 3,
        title: 'Program3',
        desc: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
        img: 'https://api.lorem.space/image/face?w=200&h=200',
      },

      {
        id: 4,
        title: 'Program4',
        desc: 'Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.',
        img: 'https://api.lorem.space/image/face?w=200&h=200',
      },
    ],
  });
}
