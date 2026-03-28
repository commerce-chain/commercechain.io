import type { ReactNode } from "react";
import type { MDXComponents as MDXComponentMap } from "mdx/types";
import { CodeBlock } from "@/components/docs/CodeBlock";

type BadgeProps = { children: ReactNode };

function Badge({ children }: BadgeProps) { return <span className="doc-badge">{children}</span>; }
export function PillarBadge({ children }: BadgeProps) { return <Badge>{children}</Badge>; }
export function IndustryPackBadge({ children }: BadgeProps) { return <Badge>Industry Pack: {children}</Badge>; }
export function OSSSurface({ children }: BadgeProps) { return <div className="card"><strong>OSS Surface</strong><p>{children}</p></div>; }
export function ProprietaryNote({ children }: BadgeProps) { return <div className="card"><strong>Better Data Hosted</strong><p>{children}</p></div>; }
export function LoopDiagram({ children }: BadgeProps) { return <pre className="code-block">{children}</pre>; }
export function EcosystemLink({ href, children }: { href: string; children: ReactNode }) { return <a href={href} className="text-link">{children}</a>; }

export const MDXComponents: MDXComponentMap = { pre: (props) => <CodeBlock {...props} />, PillarBadge, IndustryPackBadge, OSSSurface, ProprietaryNote, LoopDiagram, EcosystemLink };
