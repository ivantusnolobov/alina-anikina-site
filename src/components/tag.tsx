const colorMap = new Map([
  ['Art', 'bg-pink-100 text-pink-800'],
  ['Graphical Design', 'bg-green-100 text-green-800'],
  ['Digital Design', 'bg-blue-100 text-blue-800'],
]);

export default function Tag({ content, className = '' }: Props) {
  const tagColor = colorMap.get(content) ?? 'bg-purple-100 text-purple-800';
  const mergedClassName = `inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${tagColor} ${className}`;
  return <span className={mergedClassName}>{content}</span>;
}

type Props = {
  className?: string;
  content: string;
};
