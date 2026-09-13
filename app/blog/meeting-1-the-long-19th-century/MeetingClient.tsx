'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import {
  Block,
  THEORY,
  OVERVIEW_TRANSFORMATIONS,
  MAPS,
  REVOLUTIONS,
  RevolutionId,
  AGES,
  MARX_LIFE,
  REFERENCES,
  TIMELINE_EVENTS,
  ERAS,
  TIMELINE_START,
  TIMELINE_END,
  TimelineTab,
} from './data';

const ERA_COLORS: Record<string, string> = {
  precondicoes: 'bg-neutral-300 dark:bg-neutral-700',
  revolucao: 'bg-red-300/80 dark:bg-red-900/70',
  capital: 'bg-amber-300/80 dark:bg-amber-900/70',
  imperio: 'bg-purple-300/80 dark:bg-purple-900/70',
};

// Lay out timeline events on a true chronological scale, then push any that
// would overlap apart just enough to keep their year labels legible —
// dense clusters (e.g. Marx's life) end up slightly stretched relative to
// sparser periods, while era bands below still reflect the real scale.
const TIMELINE_PADDING = 28;
const TIMELINE_MIN_GAP = 34;
const TIMELINE_NOMINAL_WIDTH = 2400;

function layoutTimeline() {
  const contentWidth = TIMELINE_NOMINAL_WIDTH - TIMELINE_PADDING * 2;
  const xForYear = (year: number) =>
    TIMELINE_PADDING +
    ((year - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * contentWidth;

  const sorted = [...TIMELINE_EVENTS].sort((a, b) => a.year - b.year);
  let prev = -Infinity;
  const positioned = sorted.map((event) => {
    let x = xForYear(event.year);
    if (x < prev + TIMELINE_MIN_GAP) x = prev + TIMELINE_MIN_GAP;
    prev = x;
    return { event, x };
  });

  const trackWidth = Math.max(TIMELINE_NOMINAL_WIDTH, prev + TIMELINE_PADDING);
  return { positioned, trackWidth, xForYear };
}

const { positioned: POSITIONED_EVENTS, trackWidth: TIMELINE_WIDTH, xForYear: eraX } =
  layoutTimeline();

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-3">
      {blocks.map((block, i) => {
        if (block.type === 'subheading') {
          return (
            <h4
              key={i}
              className="font-semibold text-neutral-900 dark:text-neutral-100 mt-5 text-[15px]"
            >
              {block.text}
            </h4>
          );
        }
        if (block.type === 'paragraph') {
          return (
            <p
              key={i}
              className="text-sm text-neutral-600 dark:text-neutral-400 italic border-l-2 border-neutral-200 dark:border-neutral-800 pl-3"
            >
              {block.text}
            </p>
          );
        }
        const items = block.items;
        const ListTag = block.type === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag
            key={i}
            className={clsx(
              'text-sm text-neutral-700 dark:text-neutral-300 space-y-2 pl-5',
              block.type === 'ordered' ? 'list-decimal' : 'list-disc'
            )}
          >
            {items.map((item, j) => (
              <li key={j}>
                {item.text}
                {item.sub && (
                  <ul className="list-[circle] pl-5 mt-1.5 space-y-1 text-neutral-600 dark:text-neutral-400">
                    {item.sub.map((s, k) => (
                      <li key={k}>{s}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ListTag>
        );
      })}
    </div>
  );
}

function MapToggle() {
  const [view, setView] = useState<'1815' | '1871'>('1815');
  const map = MAPS[view];

  return (
    <div className="my-6">
      <div className="inline-flex rounded-md border border-neutral-200 dark:border-neutral-700 overflow-hidden text-sm mb-3">
        {(['1815', '1871'] as const).map((y) => (
          <button
            key={y}
            onClick={() => setView(y)}
            className={clsx(
              'px-3 py-1.5 transition-colors',
              view === y
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                : 'bg-white dark:bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'
            )}
          >
            Europa em {y}
          </button>
        ))}
      </div>
      <div
        className="relative w-full rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900"
        style={{ aspectRatio: '16 / 10' }}
      >
        {(['1815', '1871'] as const).map((y) => (
          <Image
            key={y}
            src={MAPS[y].src}
            alt={MAPS[y].title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="p-2"
            style={{
              objectFit: 'contain',
              transition: 'opacity 400ms ease',
              opacity: view === y ? 1 : 0,
            }}
          />
        ))}
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
        <span className="font-medium text-neutral-900 dark:text-neutral-100">{map.title}</span> —{' '}
        {map.caption}
      </p>
    </div>
  );
}

function Timeline({
  activeTab,
  onSelect,
}: {
  activeTab: TimelineTab;
  onSelect: (t: TimelineTab) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const lineTop = 50;

  const previewEvent = hovered !== null ? POSITIONED_EVENTS[hovered].event : null;

  return (
    <div className="my-10">
      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1 text-sm uppercase tracking-wide">
        Linha do tempo
      </h3>
      <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-4">
        Passe o mouse ou clique em um marcador para ver o evento e abrir a aba correspondente.
      </p>
      <div className="overflow-x-auto -mx-2 px-2 pb-2">
        <div className="relative" style={{ width: TIMELINE_WIDTH, height: 90 }}>
          <div
            className="absolute h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800"
            style={{ top: lineTop, left: TIMELINE_PADDING, width: TIMELINE_WIDTH - TIMELINE_PADDING * 2 }}
          />
          {ERAS.map((era) => (
            <div
              key={era.id}
              className={clsx('absolute h-1.5 rounded-full', ERA_COLORS[era.id])}
              style={{
                top: lineTop,
                left: eraX(era.start),
                width: eraX(era.end) - eraX(era.start),
              }}
              title={era.label}
            />
          ))}
          {POSITIONED_EVENTS.map(({ event, x }, i) => {
            const above = i % 2 === 0;
            const active = event.tab === activeTab;
            const isHovered = hovered === i;
            return (
              <button
                key={`${event.year}-${event.label}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered((h) => (h === i ? null : h))}
                onClick={() => onSelect(event.tab)}
                className="absolute -translate-x-1/2 flex flex-col items-center"
                style={{ left: x, top: lineTop }}
              >
                {above && (
                  <span
                    className="absolute text-[10px] leading-tight text-neutral-500 dark:text-neutral-500 whitespace-nowrap"
                    style={{ bottom: 11 }}
                  >
                    {event.year}
                  </span>
                )}
                <span
                  className={clsx(
                    'w-2.5 h-2.5 rounded-full border-2 transition-transform',
                    active
                      ? 'bg-neutral-900 dark:bg-neutral-100 border-neutral-900 dark:border-neutral-100'
                      : 'bg-white dark:bg-[#111010] border-neutral-400 dark:border-neutral-600',
                    isHovered && 'scale-125'
                  )}
                />
                {!above && (
                  <span
                    className="absolute text-[10px] leading-tight text-neutral-500 dark:text-neutral-500 whitespace-nowrap"
                    style={{ top: 11 }}
                  >
                    {event.year}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-1 text-sm min-h-[20px]">
        {previewEvent ? (
          <span className="text-neutral-700 dark:text-neutral-300">
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {previewEvent.year}
            </span>{' '}
            — {previewEvent.label}
          </span>
        ) : (
          <span className="text-neutral-400 dark:text-neutral-600">
            Passe o mouse sobre um marcador para ver o evento.
          </span>
        )}
      </div>
    </div>
  );
}

const TAB_DEFS: { id: TimelineTab; label: string }[] = [
  { id: 'ingles', label: 'Revolução Inglesa' },
  { id: 'americana', label: 'Revolução Americana' },
  { id: 'francesa', label: 'Revolução Francesa' },
  { id: 'marx', label: 'Vida de Marx' },
  { id: 'eras', label: 'Eras do Século XIX' },
];

function RevolutionPanel({ id }: { id: RevolutionId }) {
  const rev = REVOLUTIONS[id];
  return (
    <div>
      <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-1">
        {rev.label}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">{rev.period}</p>
      <Blocks blocks={rev.blocks} />
    </div>
  );
}

function MarxPanel() {
  return (
    <div className="space-y-8">
      {MARX_LIFE.map((section) => (
        <div key={section.id}>
          <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 mb-2">
            {section.heading}
          </h3>
          <Blocks blocks={section.blocks} />
        </div>
      ))}
    </div>
  );
}

function AgesPanel() {
  return (
    <div className="space-y-8">
      {AGES.map((section) => (
        <div key={section.id}>
          <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 mb-2">
            {section.heading}
          </h3>
          <Blocks blocks={section.blocks} />
        </div>
      ))}
    </div>
  );
}

function Tabs({
  active,
  onChange,
}: {
  active: TimelineTab;
  onChange: (t: TimelineTab) => void;
}) {
  return (
    <div>
      <div
        role="tablist"
        className="flex flex-wrap gap-x-4 gap-y-2 border-b border-neutral-200 dark:border-neutral-800 mb-6"
      >
        {TAB_DEFS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => onChange(tab.id)}
            className={clsx(
              'px-1 py-2 text-sm -mb-px border-b-2 transition-colors',
              active === tab.id
                ? 'border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 font-medium'
                : 'border-transparent text-neutral-500 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        {active === 'ingles' && <RevolutionPanel id="ingles" />}
        {active === 'americana' && <RevolutionPanel id="americana" />}
        {active === 'francesa' && <RevolutionPanel id="francesa" />}
        {active === 'marx' && <MarxPanel />}
        {active === 'eras' && <AgesPanel />}
      </div>
    </div>
  );
}

function References() {
  return (
    <details className="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-4">
      <summary className="cursor-pointer text-sm font-medium text-neutral-900 dark:text-neutral-100">
        Referências
      </summary>
      <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
        {REFERENCES.map((ref, i) => (
          <li key={i}>{ref}</li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-500 italic">
        Estilo de citação: Chicago autor-data. Ajuste para o estilo exigido pelo seu curso (MLA,
        APA, Chicago notas-bibliografia), se for diferente.
      </p>
    </details>
  );
}

export default function MeetingClient() {
  const [activeTab, setActiveTab] = useState<TimelineTab>('ingles');

  return (
    <div>
      <section className="mb-8">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          Marco teórico
        </h2>
        <Blocks blocks={THEORY} />
      </section>

      <section className="mb-4">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          Panorama: 11 grandes transformações do século XIX
        </h2>
        <ol className="list-decimal pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1.5">
          {OVERVIEW_TRANSFORMATIONS.map((item, i) => (
            <li key={i}>{item.text}</li>
          ))}
        </ol>
        <MapToggle />
      </section>

      <Timeline activeTab={activeTab} onSelect={setActiveTab} />
      <Tabs active={activeTab} onChange={setActiveTab} />

      <References />
    </div>
  );
}
