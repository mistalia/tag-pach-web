import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-brand-dark border-t border-white/10 text-text-muted py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* 1. タイトル / ロゴ */}
        <div className="space-y-2">
          <h2 className="font-game text-title-lg text-text-primary tracking-wider">
            TAG PACH
          </h2>
          <p className="text-body-base text-xs">OFFICIAL WEBSITE</p>
        </div>

        {/* 2. ナビゲーション / 政策リンク */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="/privacy"
            className="hover:text-text-primary transition-colors"
          >
            プライバシーポリシー
          </Link>
          <Link
            href="/terms"
            className="hover:text-text-primary transition-colors"
          >
            利用規約
          </Link>
          <Link
            href="/support"
            className="hover:text-text-primary transition-colors"
          >
            お問い合わせ・サポート
          </Link>
        </nav>

        {/* 3. 権利表記・プラットフォーム表記 */}
        <div className="text-xs space-y-1 max-w-2xl leading-relaxed opacity-80">
          <p>※ 画面は開発中のものです。実際の仕様とは異なる場合があります。</p>
          <p>© 2026 Studio Name / Publisher Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
