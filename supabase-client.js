(function () {
  const cfg = window.SIGA_SUPABASE_CONFIG || {};
  const ready = Boolean(cfg.url && cfg.publishableKey && window.supabase?.createClient);

  window.sigaSupabaseReady = ready;
  window.sigaSupabase = null;

  if (ready) {
    window.sigaSupabase = window.supabase.createClient(cfg.url, cfg.publishableKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  }

  window.sigaSupabaseStatus = function () {
    return {
      ready,
      configured: Boolean(cfg.url && cfg.publishableKey),
      client: Boolean(window.sigaSupabase)
    };
  };
})();