var L,
  h,
  z,
  ne,
  C,
  I,
  _e,
  U = {},
  G = [],
  oe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(e, t) {
  for (var _ in t) e[_] = t[_];
  return e;
}
function q(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function F(e, t, _) {
  var r,
    l,
    o,
    u = {};
  for (o in t)
    o == "key" ? (r = t[o]) : o == "ref" ? (l = t[o]) : (u[o] = t[o]);
  if (
    (arguments.length > 2 &&
      (u.children = arguments.length > 3 ? L.call(arguments, 2) : _),
    typeof e == "function" && e.defaultProps != null)
  )
    for (o in e.defaultProps) u[o] === void 0 && (u[o] = e.defaultProps[o]);
  return A(e, u, r, l, null);
}
function A(e, t, _, r, l) {
  var o = {
    type: e,
    props: t,
    key: _,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: l ?? ++z,
  };
  return l == null && h.vnode != null && h.vnode(o), o;
}
function M(e) {
  return e.children;
}
function D(e, t) {
  (this.props = e), (this.context = t);
}
function w(e, t) {
  if (t == null) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var _; t < e.__k.length; t++)
    if ((_ = e.__k[t]) != null && _.__e != null) return _.__e;
  return typeof e.type == "function" ? w(e) : null;
}
function J(e) {
  var t, _;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((_ = e.__k[t]) != null && _.__e != null) {
        e.__e = e.__c.base = _.__e;
        break;
      }
    return J(e);
  }
}
function R(e) {
  ((!e.__d && (e.__d = !0) && C.push(e) && !W.__r++) ||
    I !== h.debounceRendering) &&
    ((I = h.debounceRendering) || setTimeout)(W);
}
function W() {
  for (var e; (W.__r = C.length); )
    (e = C.sort(function (t, _) {
      return t.__v.__b - _.__v.__b;
    })),
      (C = []),
      e.some(function (t) {
        var _, r, l, o, u, s;
        t.__d &&
          ((u = (o = (_ = t).__v).__e),
          (s = _.__P) &&
            ((r = []),
            ((l = k({}, o)).__v = o.__v + 1),
            H(
              s,
              o,
              l,
              _.__n,
              s.ownerSVGElement !== void 0,
              o.__h != null ? [u] : null,
              r,
              u ?? w(o),
              o.__h
            ),
            Y(r, o),
            o.__e != u && J(o)));
      });
}
function K(e, t, _, r, l, o, u, s, f, p) {
  var n,
    d,
    c,
    i,
    a,
    b,
    v,
    y = (r && r.__k) || G,
    g = y.length;
  for (_.__k = [], n = 0; n < t.length; n++)
    if (
      (i = _.__k[n] =
        (i = t[n]) == null || typeof i == "boolean"
          ? null
          : typeof i == "string" || typeof i == "number" || typeof i == "bigint"
          ? A(null, i, null, null, i)
          : Array.isArray(i)
          ? A(M, { children: i }, null, null, null)
          : i.__b > 0
          ? A(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
          : i) != null
    ) {
      if (
        ((i.__ = _),
        (i.__b = _.__b + 1),
        (c = y[n]) === null || (c && i.key == c.key && i.type === c.type))
      )
        y[n] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((c = y[d]) && i.key == c.key && i.type === c.type) {
            y[d] = void 0;
            break;
          }
          c = null;
        }
      H(e, i, (c = c || U), l, o, u, s, f, p),
        (a = i.__e),
        (d = i.ref) &&
          c.ref != d &&
          (v || (v = []),
          c.ref && v.push(c.ref, null, i),
          v.push(d, i.__c || a, i)),
        a != null
          ? (b == null && (b = a),
            typeof i.type == "function" && i.__k === c.__k
              ? (i.__d = f = Q(i, f, e))
              : (f = X(e, i, c, y, a, f)),
            typeof _.type == "function" && (_.__d = f))
          : f && c.__e == f && f.parentNode != e && (f = w(c));
    }
  for (_.__e = b, n = g; n--; ) y[n] != null && ee(y[n], y[n]);
  if (v) for (n = 0; n < v.length; n++) Z(v[n], v[++n], v[++n]);
}
function Q(e, t, _) {
  for (var r, l = e.__k, o = 0; l && o < l.length; o++)
    (r = l[o]) &&
      ((r.__ = e),
      (t = typeof r.type == "function" ? Q(r, t, _) : X(_, r, r, l, r.__e, t)));
  return t;
}
function X(e, t, _, r, l, o) {
  var u, s, f;
  if (t.__d !== void 0) (u = t.__d), (t.__d = void 0);
  else if (_ == null || l != o || l.parentNode == null)
    e: if (o == null || o.parentNode !== e) e.appendChild(l), (u = null);
    else {
      for (s = o, f = 0; (s = s.nextSibling) && f < r.length; f += 2)
        if (s == l) break e;
      e.insertBefore(l, o), (u = o);
    }
  return u !== void 0 ? u : l.nextSibling;
}
function re(e, t, _, r, l) {
  var o;
  for (o in _)
    o === "children" || o === "key" || o in t || N(e, o, null, _[o], r);
  for (o in t)
    (l && typeof t[o] != "function") ||
      o === "children" ||
      o === "key" ||
      o === "value" ||
      o === "checked" ||
      _[o] === t[o] ||
      N(e, o, t[o], _[o], r);
}
function $(e, t, _) {
  t[0] === "-"
    ? e.setProperty(t, _)
    : (e[t] =
        _ == null ? "" : typeof _ != "number" || oe.test(t) ? _ : _ + "px");
}
function N(e, t, _, r, l) {
  var o;
  e: if (t === "style")
    if (typeof _ == "string") e.style.cssText = _;
    else {
      if ((typeof r == "string" && (e.style.cssText = r = ""), r))
        for (t in r) (_ && t in _) || $(e.style, t, "");
      if (_) for (t in _) (r && _[t] === r[t]) || $(e.style, t, _[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (o = t !== (t = t.replace(/Capture$/, ""))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + o] = _),
      _
        ? r || e.addEventListener(t, o ? j : V, o)
        : e.removeEventListener(t, o ? j : V, o);
  else if (t !== "dangerouslySetInnerHTML") {
    if (l) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t !== "href" &&
      t !== "list" &&
      t !== "form" &&
      t !== "tabIndex" &&
      t !== "download" &&
      t in e
    )
      try {
        e[t] = _ ?? "";
        break e;
      } catch {}
    typeof _ == "function" ||
      (_ == null || (_ === !1 && t.indexOf("-") == -1)
        ? e.removeAttribute(t)
        : e.setAttribute(t, _));
  }
}
function V(e) {
  this.l[e.type + !1](h.event ? h.event(e) : e);
}
function j(e) {
  this.l[e.type + !0](h.event ? h.event(e) : e);
}
function H(e, t, _, r, l, o, u, s, f) {
  var p,
    n,
    d,
    c,
    i,
    a,
    b,
    v,
    y,
    g,
    S,
    x,
    B,
    T,
    E,
    m = t.type;
  if (t.constructor !== void 0) return null;
  _.__h != null &&
    ((f = _.__h), (s = t.__e = _.__e), (t.__h = null), (o = [s])),
    (p = h.__b) && p(t);
  try {
    e: if (typeof m == "function") {
      if (
        ((v = t.props),
        (y = (p = m.contextType) && r[p.__c]),
        (g = p ? (y ? y.props.value : p.__) : r),
        _.__c
          ? (b = (n = t.__c = _.__c).__ = n.__E)
          : ("prototype" in m && m.prototype.render
              ? (t.__c = n = new m(v, g))
              : ((t.__c = n = new D(v, g)),
                (n.constructor = m),
                (n.render = ie)),
            y && y.sub(n),
            (n.props = v),
            n.state || (n.state = {}),
            (n.context = g),
            (n.__n = r),
            (d = n.__d = !0),
            (n.__h = []),
            (n._sb = [])),
        n.__s == null && (n.__s = n.state),
        m.getDerivedStateFromProps != null &&
          (n.__s == n.state && (n.__s = k({}, n.__s)),
          k(n.__s, m.getDerivedStateFromProps(v, n.__s))),
        (c = n.props),
        (i = n.state),
        d)
      )
        m.getDerivedStateFromProps == null &&
          n.componentWillMount != null &&
          n.componentWillMount(),
          n.componentDidMount != null && n.__h.push(n.componentDidMount);
      else {
        if (
          (m.getDerivedStateFromProps == null &&
            v !== c &&
            n.componentWillReceiveProps != null &&
            n.componentWillReceiveProps(v, g),
          (!n.__e &&
            n.shouldComponentUpdate != null &&
            n.shouldComponentUpdate(v, n.__s, g) === !1) ||
            t.__v === _.__v)
        ) {
          for (
            n.props = v,
              n.state = n.__s,
              t.__v !== _.__v && (n.__d = !1),
              n.__v = t,
              t.__e = _.__e,
              t.__k = _.__k,
              t.__k.forEach(function (P) {
                P && (P.__ = t);
              }),
              S = 0;
            S < n._sb.length;
            S++
          )
            n.__h.push(n._sb[S]);
          (n._sb = []), n.__h.length && u.push(n);
          break e;
        }
        n.componentWillUpdate != null && n.componentWillUpdate(v, n.__s, g),
          n.componentDidUpdate != null &&
            n.__h.push(function () {
              n.componentDidUpdate(c, i, a);
            });
      }
      if (
        ((n.context = g),
        (n.props = v),
        (n.__v = t),
        (n.__P = e),
        (x = h.__r),
        (B = 0),
        "prototype" in m && m.prototype.render)
      ) {
        for (
          n.state = n.__s,
            n.__d = !1,
            x && x(t),
            p = n.render(n.props, n.state, n.context),
            T = 0;
          T < n._sb.length;
          T++
        )
          n.__h.push(n._sb[T]);
        n._sb = [];
      } else
        do
          (n.__d = !1),
            x && x(t),
            (p = n.render(n.props, n.state, n.context)),
            (n.state = n.__s);
        while (n.__d && ++B < 25);
      (n.state = n.__s),
        n.getChildContext != null && (r = k(k({}, r), n.getChildContext())),
        d ||
          n.getSnapshotBeforeUpdate == null ||
          (a = n.getSnapshotBeforeUpdate(c, i)),
        (E = p != null && p.type === M && p.key == null ? p.props.children : p),
        K(e, Array.isArray(E) ? E : [E], t, _, r, l, o, u, s, f),
        (n.base = t.__e),
        (t.__h = null),
        n.__h.length && u.push(n),
        b && (n.__E = n.__ = null),
        (n.__e = !1);
    } else
      o == null && t.__v === _.__v
        ? ((t.__k = _.__k), (t.__e = _.__e))
        : (t.__e = le(_.__e, t, _, r, l, o, u, f));
    (p = h.diffed) && p(t);
  } catch (P) {
    (t.__v = null),
      (f || o != null) &&
        ((t.__e = s), (t.__h = !!f), (o[o.indexOf(s)] = null)),
      h.__e(P, t, _);
  }
}
function Y(e, t) {
  h.__c && h.__c(t, e),
    e.some(function (_) {
      try {
        (e = _.__h),
          (_.__h = []),
          e.some(function (r) {
            r.call(_);
          });
      } catch (r) {
        h.__e(r, _.__v);
      }
    });
}
function le(e, t, _, r, l, o, u, s) {
  var f,
    p,
    n,
    d = _.props,
    c = t.props,
    i = t.type,
    a = 0;
  if ((i === "svg" && (l = !0), o != null)) {
    for (; a < o.length; a++)
      if (
        (f = o[a]) &&
        "setAttribute" in f == !!i &&
        (i ? f.localName === i : f.nodeType === 3)
      ) {
        (e = f), (o[a] = null);
        break;
      }
  }
  if (e == null) {
    if (i === null) return document.createTextNode(c);
    (e = l
      ? document.createElementNS("http://www.w3.org/2000/svg", i)
      : document.createElement(i, c.is && c)),
      (o = null),
      (s = !1);
  }
  if (i === null) d === c || (s && e.data === c) || (e.data = c);
  else {
    if (
      ((o = o && L.call(e.childNodes)),
      (p = (d = _.props || U).dangerouslySetInnerHTML),
      (n = c.dangerouslySetInnerHTML),
      !s)
    ) {
      if (o != null)
        for (d = {}, a = 0; a < e.attributes.length; a++)
          d[e.attributes[a].name] = e.attributes[a].value;
      (n || p) &&
        ((n && ((p && n.__html == p.__html) || n.__html === e.innerHTML)) ||
          (e.innerHTML = (n && n.__html) || ""));
    }
    if ((re(e, c, d, l, s), n)) t.__k = [];
    else if (
      ((a = t.props.children),
      K(
        e,
        Array.isArray(a) ? a : [a],
        t,
        _,
        r,
        l && i !== "foreignObject",
        o,
        u,
        o ? o[0] : _.__k && w(_, 0),
        s
      ),
      o != null)
    )
      for (a = o.length; a--; ) o[a] != null && q(o[a]);
    s ||
      ("value" in c &&
        (a = c.value) !== void 0 &&
        (a !== e.value ||
          (i === "progress" && !a) ||
          (i === "option" && a !== d.value)) &&
        N(e, "value", a, d.value, !1),
      "checked" in c &&
        (a = c.checked) !== void 0 &&
        a !== e.checked &&
        N(e, "checked", a, d.checked, !1));
  }
  return e;
}
function Z(e, t, _) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (r) {
    h.__e(r, _);
  }
}
function ee(e, t, _) {
  var r, l;
  if (
    (h.unmount && h.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || Z(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        h.__e(o, t);
      }
    (r.base = r.__P = null), (e.__c = void 0);
  }
  if ((r = e.__k))
    for (l = 0; l < r.length; l++)
      r[l] && ee(r[l], t, _ || typeof e.type != "function");
  _ || e.__e == null || q(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function ie(e, t, _) {
  return this.constructor(e, _);
}
function se(e, t, _) {
  var r, l, o;
  h.__ && h.__(e, t),
    (l = (r = typeof _ == "function") ? null : (_ && _.__k) || t.__k),
    (o = []),
    H(
      t,
      (e = ((!r && _) || t).__k = F(M, null, [e])),
      l || U,
      U,
      t.ownerSVGElement !== void 0,
      !r && _ ? [_] : l ? null : t.firstChild ? L.call(t.childNodes) : null,
      o,
      !r && _ ? _ : l ? l.__e : t.firstChild,
      r
    ),
    Y(o, e);
}
function O(e, t) {
  se(e, t, O);
}
(L = G.slice),
  (h = {
    __e: function (e, t, _, r) {
      for (var l, o, u; (t = t.__); )
        if ((l = t.__c) && !l.__)
          try {
            if (
              ((o = l.constructor) &&
                o.getDerivedStateFromError != null &&
                (l.setState(o.getDerivedStateFromError(e)), (u = l.__d)),
              l.componentDidCatch != null &&
                (l.componentDidCatch(e, r || {}), (u = l.__d)),
              u)
            )
              return (l.__E = l);
          } catch (s) {
            e = s;
          }
      throw e;
    },
  }),
  (z = 0),
  (ne = function (e) {
    return e != null && e.constructor === void 0;
  }),
  (D.prototype.setState = function (e, t) {
    var _;
    (_ =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = k({}, this.state))),
      typeof e == "function" && (e = e(k({}, _), this.props)),
      e && k(_, e),
      e != null && this.__v && (t && this._sb.push(t), R(this));
  }),
  (D.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), R(this));
  }),
  (D.prototype.render = M),
  (C = []),
  (W.__r = 0),
  (_e = 0);
var ce = (e, t) => {
  t = [].concat(t);
  let _ = t[t.length - 1].nextSibling;
  function r(l, o) {
    e.insertBefore(l, o || _);
  }
  return (e.__k = {
    nodeType: 1,
    parentNode: e,
    firstChild: t[0],
    childNodes: t,
    insertBefore: r,
    appendChild: r,
    removeChild(l) {
      e.removeChild(l);
    },
  });
};
function te(e) {
  let t = {},
    { attributes: _, childNodes: r } = e,
    l = {},
    o = !1;
  if (e.nodeType === 3) return e.data;
  for (let s = 0; s < _.length; s++) {
    let f = _[s].name;
    if (f.startsWith("wp-")) {
      o = !0;
      let p = _[s].value;
      try {
        p = JSON.parse(p);
      } catch {}
      let [, n, d] = /wp-([^:]+):?(.*)$/.exec(f);
      (l[n] = l[n] || {}), (l[n][d || "default"] = p);
    } else t[f] = _[s].value;
  }
  o && (t.wp = l);
  let u = [];
  for (let s = 0; s < r.length; s++) {
    let f = r[s];
    f.nodeType === 8 ? (f.remove(), s--) : u.push(te(f));
  }
  return F(e.localName, t, u);
}
function ue() {
  let e = ce(document.documentElement, document.body),
    t = te(document.body);
  O(t, e), console.log("hydrated!");
}
window.run = ue;
