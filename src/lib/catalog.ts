export const CATEGORY_SLUGS = {
  效率: 'xiaolv',
  销售: 'xiaoshou',
  营销: 'yingxiao',
  运营: 'yunying',
  客成: 'kecheng',
  生活: 'shenghuo',
} as const;

export type CategoryName = keyof typeof CATEGORY_SLUGS;

export interface CategoryMeta {
  slug: string;
  name: CategoryName;
  kicker: string;
  blurb: string;
  tone: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: 'xiaolv',
    name: '效率',
    kicker: '把重复劳动交给助手',
    blurb: '周报、纪要、评审排队——把每周都会做一遍的事写成可复查的流程。',
    tone: 'teal',
  },
  {
    slug: 'xiaoshou',
    name: '销售',
    kicker: '跟进有节奏，报价有底稿',
    blurb: '线索跟进、报价起草、下次触达提醒。发出前必须先给你看。',
    tone: 'olive',
  },
  {
    slug: 'yingxiao',
    name: '营销',
    kicker: '选题、成片、排期一条线',
    blurb: '公众号选题、无脸短视频、竞品简报。先出草稿，确认后再发布。',
    tone: 'cinnabar',
  },
  {
    slug: 'yunying',
    name: '运营',
    kicker: '值班、发版、工单不断档',
    blurb: '分流工单、核对发版清单、把值班事项落到对应群。',
    tone: 'slate',
  },
  {
    slug: 'kecheng',
    name: '客成',
    kicker: '入职顺、续约稳',
    blurb: '新客引导、健康检查、续约提醒。对外消息一律先预览。',
    tone: 'indigo',
  },
  {
    slug: 'shenghuo',
    name: '生活',
    kicker: '把日子也排进目录',
    blurb: '家庭菜单、出差行程。问清楚偏好，再给你看计划。',
    tone: 'ochre',
  },
];

export const INTEGRATION_SLUGS: Record<string, string> = {
  飞书: 'feishu',
  企微: 'qiwei',
  钉钉: 'dingtalk',
  Gmail: 'gmail',
  Slack: 'slack',
  GitHub: 'github',
  Notion: 'notion',
  YouTube: 'youtube',
  AITuber: 'aituber',
  TikTok: 'tiktok',
  微信公众号: 'wechat-mp',
};

export interface IntegrationMeta {
  slug: string;
  name: string;
  mark: string;
  blurb: string;
}

export const INTEGRATIONS: IntegrationMeta[] = [
  { slug: 'feishu', name: '飞书', mark: '飞', blurb: '文档、群聊、日历与审批流。' },
  { slug: 'qiwei', name: '企微', mark: '微', blurb: '企业微信客户与内部会话。' },
  { slug: 'dingtalk', name: '钉钉', mark: '钉', blurb: '钉钉群、待办与通知。' },
  { slug: 'gmail', name: 'Gmail', mark: 'G', blurb: '邮件草稿、收件与跟进。' },
  { slug: 'slack', name: 'Slack', mark: 'S', blurb: '频道提醒、值班与简报。' },
  { slug: 'github', name: 'GitHub', mark: 'GH', blurb: 'Pull Request、发版与评审。' },
  { slug: 'notion', name: 'Notion', mark: 'N', blurb: '知识库、台历与归档。' },
  { slug: 'youtube', name: 'YouTube', mark: 'YT', blurb: 'Shorts 与频道排期发布。' },
  { slug: 'aituber', name: 'AITuber', mark: 'AI', blurb: '虚拟口播与无脸成片。' },
  { slug: 'tiktok', name: 'TikTok', mark: 'TT', blurb: '短视频发布与封面文案。' },
  { slug: 'wechat-mp', name: '微信公众号', mark: '公', blurb: '公众号选题、草稿与排期。' },
];

export function categoryByName(name: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.name === name);
}

export function categoryBySlug(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function integrationByName(name: string): IntegrationMeta | undefined {
  return INTEGRATIONS.find((i) => i.name === name);
}

export function integrationBySlug(slug: string): IntegrationMeta | undefined {
  return INTEGRATIONS.find((i) => i.slug === slug);
}

export function formatAddedAt(iso: string): string {
  const [y, m, d] = iso.split('-');
  if (!y || !m || !d) return iso;
  return `${y}年${Number(m)}月${Number(d)}日`;
}

export interface BotCard {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  integrations: string[];
  contributor: string;
  added_at: string;
  prompt: string;
}

export function sortBots(bots: BotCard[], by: 'newest' | 'name'): BotCard[] {
  const copy = [...bots];
  if (by === 'name') {
    return copy.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
  }
  return copy.sort((a, b) => b.added_at.localeCompare(a.added_at) || a.name.localeCompare(b.name, 'zh-CN'));
}
