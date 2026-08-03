import { useMemo, useState } from "react";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import Icon from "../lib/icons";
import { certifications, social } from "../data";

export default function Certifications() {
  const [query, setQuery] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [expandAll, setExpandAll] = useState(false);

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const list = useMemo(
    () =>
      certifications.filter((c) => {
        if (featuredOnly && !c.featured) return false;
        if (!q) return true;
        return `${c.title} ${c.issuer}`.toLowerCase().includes(q);
      }),
    [q, featuredOnly]
  );

  const showAll = expandAll || searching;
  const shown = showAll ? list : list.slice(0, 8);

  return (
    <section className="section section-tight" id="certifications">
      <div className="container">
        <SectionHead
          center
          eyebrow="Certifications"
          title={<>Certifications &amp; <span className="text-gradient">courses</span></>}
          sub="Continuous learning across development, cloud, and AI."
        />
        <Reveal className="cert-tools">
          <input
            type="search"
            className="cert-search"
            placeholder="Search certifications…"
            aria-label="Search certifications"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="cert-toggle"
            aria-pressed={featuredOnly}
            onClick={() => setFeaturedOnly((f) => !f)}
          >
            <Icon name="star" />
            Featured only
          </button>
        </Reveal>
        <div className="cert-grid">
          {shown.map((c) => (
            <a
              className="cert-card"
              key={c.title}
              href={c.url || social.certifications}
              target="_blank"
              rel="noopener"
            >
              <span className="cert-ic"><Icon name="medal" /></span>
              <span className="cert-info">
                <h3>{c.title}</h3>
                <span className="cert-issuer">
                  {c.issuer}
                  {c.featured ? <span className="feat-star"> ★ Featured</span> : null}
                </span>
              </span>
            </a>
          ))}
          {shown.length === 0 ? (
            <div className="empty" style={{ gridColumn: "1/-1" }}>
              No certifications match your search.
            </div>
          ) : null}
        </div>
        {!showAll && list.length > 8 ? (
          <Reveal className="cert-more-wrap">
            <button className="btn btn-outline" onClick={() => setExpandAll(true)}>
              Show All {list.length}
              <Icon name="chevron-down" strokeWidth={2} />
            </button>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
