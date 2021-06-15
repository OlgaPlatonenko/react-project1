# React Base

```js
<div>
  <Header
    title="Header text"
    openMenu={handleMenuOpen}
  />

  <Menu isOpen={isOpen} closeMenu={handleMenuOpen} />

  <Main text="Main text" />

  <Footer />
</div>
```

- Внутри `<Header /> ` - `<button>Open Menu</button>`
- Внутри `<Menu />` - `<button>Close Menu</button>`
- Везде должны быть подключены стили (css)