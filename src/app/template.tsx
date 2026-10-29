// Re-mounts on every navigation, replaying the same fade-in the route wrapper had before.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-content animate-fade-in">{children}</div>;
}
