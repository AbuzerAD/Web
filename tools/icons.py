"""Swap the inline SVG sprite in index.html for Google Material Symbols (Rounded).

The sprite keeps its own symbol ids, so every `<use href="#…">` in the markup,
script.js and the generated case pages keeps working. `tools/build.py` copies
that sprite into the sub-pages, so run this first, then build.py.

Usage:
    python3 tools/icons.py && python3 tools/build.py

Needs network access to fonts.gstatic.com. Brand marks (LinkedIn, Behance,
Dribbble) are left untouched: Material Symbols ships no brand logos.
"""

import re
import urllib.request

CDN = ("https://fonts.gstatic.com/s/i/short-term/release/"
       "materialsymbolsrounded/{name}/default/24px.svg")

ICONS = {
    "i-phone": "call",
    "i-mail": "mail",
    "i-pin": "location_on",
    "i-arrow": "arrow_forward",
    "i-up": "arrow_upward",
    "i-down": "expand_more",
    "i-search": "search",
    "i-close": "close",
    "i-copy": "content_copy",
    "i-check": "check",
    "i-sun": "light_mode",
    "i-moon": "dark_mode",
    "i-external": "open_in_new",
    "i-download": "download",
    "i-quote": "format_quote",
    "i-spark": "auto_awesome",
    "s-research": "person_search",
    "s-interaction": "ads_click",
    "s-ui": "web_asset",
    "s-system": "widgets",
    "s-mockup": "design_services",
    "s-mobile": "smartphone",
    "s-responsive": "devices",
    "s-motion": "animation",
    "s-layout": "view_quilt",
}

cache = {}


def fetch(name):
    if name not in cache:
        with urllib.request.urlopen(CDN.format(name=name), timeout=30) as res:
            cache[name] = res.read().decode("utf-8")
    return cache[name]


def material_symbol(symbol_id, name):
    svg = fetch(name)
    view_box = re.search(r'viewBox="([^"]+)"', svg).group(1)
    paths = re.findall(r"<path[^>]*?/>", svg)
    if not paths:
        raise SystemExit(f"no <path> returned for {name}")
    return (f'<symbol id="{symbol_id}" viewBox="{view_box}" fill="currentColor">'
            + "".join(paths) + "</symbol>")

def main():
    page = "index.html"
    html = open(page, encoding="utf-8").read()

    replaced = 0
    for symbol_id, name in ICONS.items():
        pattern = re.compile(r'<symbol id="%s".*?</symbol>' % re.escape(symbol_id), re.S)
        if not pattern.search(html):
            raise SystemExit(f"symbol not found in index.html: {symbol_id}")
        html = pattern.sub(lambda _m: material_symbol(symbol_id, name), html, count=1)
        replaced += 1

    open(page, "w", encoding="utf-8").write(html)
    print(f"materialised {replaced} icons in {page}")
    print("brand marks left custom:", ", ".join(sorted(set(
        re.findall(r'<symbol id="(i-linkedin|i-behance|i-dribbble)"', html)))))


if __name__ == "__main__":
    main()
