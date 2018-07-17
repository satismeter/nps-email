import React from 'react';

export function Style() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
<!--
.ExternalClass p{ MARGIN: 0px; }
.ReadMsgBody { width: 100%; }
#outlook a { padding: 0; }
body { width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; }
a img { border: none; }
img { outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
.ExternalClass { width: 100% !important; }
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
.ExternalClass p { MARGIN: 0px; }
.ExternalClass img[class^=Emoji] { width: 10px !important; height: 10px !important; display: inline !important; }
table.ee_mobiletemplate { table-layout: fixed !important; }

@media only screen and (max-device-width: 480px), only screen and (max-width: 640px) and (-webkit-min-device-pixel-ratio: 1.1), only screen and (-webkit-min-device-pixel-ratio: 2.1) { html { -webkit-text-size-adjust: none !important; }
  body { min-width: 100%; }
  table[class~=ee_element], td[class~=eeb_width], table[class~=eeb_width], table[class~=eev_element], table[class~=eebdrtbl] { width: 100% !important; }
  table[class~=ee_element]:not(.ee_nostack) { display: block !important; }
  table[class~=ee_element]:not(.ee_nostack):not(.hide) > tbody, table[class~=ee_element]:not(.ee_nostack) > tbody > tr, table[class~=ee_element]:not(.ee_nostack) > tbody > tr > td:not(.ee_nostack), table[class~=eev_element]:not(.ee_nostack):not(.hide) > tbody, table[class~=eev_element]:not(.ee_nostack) > tbody > tr, table[class~=eev_element]:not(.ee_nostack) > tbody > tr > td:not(.ee_nostack) { width: 100% !important; height: auto; display: block !important; }
  table[class~=ee_element]:not(.ee_nostack) > tbody > tr > td[class~=ee_pad], table[class~=ee_element]:not(.ee_nostack) > tbody > tr > td[class~=ee_bdr] { width: auto !important; }
  table[class~=eem_mainouterzone], td[class~=eem_mainouterzone] { max-width: 600px !important; width: 100% !important; }
  td[class~=ved-scaled-cols]:not(.ee_nostack), td[class~=ee_column]:not(.ee_nostack), table[class~=ee_columns]:not(.ee_nostack):not([data-edit~=columns]) { display: block !important; clear: both !important; width: 100% !important; margin: 0 !important; padding: 0 !important; }
  img[class~=ee_editable]:not(.ee_smallimage):not(.ee_pnggif_image):not(.ee_no_upscale), img[class~=ved_placeholder_image] { height: auto !important; max-width: 600px !important; width: 100% !important; }
  td[class~=ved-scaled-cols][class~=ee_nostack] { width: auto !important; }
  img[class~=noresize] { height: auto !important; width: auto !important; }
  img[class~=ee_smallimage], img[class~=ee_pnggif_image], img[class~=ee_no_upscale] { height: auto; width: auto; }
  img[class~=ee_no_upscale] { max-width: 100% !important; height: auto !important; }
  [class~=ee_editable]:not(.ee_smallimage):not(.ee_pnggif_image):not(.ee_no_upscale) { width: 100% !important; height: auto !important; }
  [class~=eegap] { display: inherit !important; }
  [class~=eem_stack], [class~=eem_stack] { display: block !important; clear: both !important; width: 100% !important; margin: 0 !important; padding: 0 !important; }
  [class~=hide], [class~=hide] * { display: none !important; }
  [class~=nothide], [class~=nothide] * { display: block !important; overflow: visible !important;}
  table[class~=eem_tablealign], table[class~=eem_tablealign] * { text-align: center !important; margin-{{left}}: auto !important; margin-{{right}}: auto !important; }
  div[class~=center], div[class~=center] * { text-align: center !important; }
  div[class~=left], div[class~=left] * { text-align: {{left}} !important; }
  div[class~=right], div[class~=right] * { text-align: {{right}} !important; }
  [class~=eem_stacknofill], [class~=eem_stacknofill] { display: block !important; clear: both !important; margin: 0 !important; padding: 0 !important; }
  td[class~=eem_dropzonealign], td[class~=eem_dropzonealign] * { text-align: center !important; margin-{{left}}: auto !important; margin-{{right}}: auto !important; }
  img[class~=reduce] { height: auto !important; width: 30% !important; }
  table[class~=ee_table] { width: 100% !important; table-layout: fixed !important; }
  table[class~=ee_table] td { width: auto !important; word-wrap: break-word !important; }
  table[class~=menu], table[class~=full-width] { width: 100% !important; }
  table[class~=menu] a { display: block; margin-bottom: 8px; }
  table[class~=ee_mobiletemplate] { table-layout: auto !important; }
  [class~=ee_headercenter] img { display: inline !important; }
  [class~=ee_headercenter], [class~=ee_headercenter] p { text-align: center !important; }
  *[class~=show_on_mobile] {display : block !important; width : auto !important; max-height: inherit !important; overflow : visible !important; float : none !important;}
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  html { -webkit-text-size-adjust: none !important; padding-{{left}}: 10px; padding-{{right}}: 10px; }
}
-->`
      }}
    />
  );
}