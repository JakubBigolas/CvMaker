import {css} from 'lit-element';

export var DefaultTemplateGlobalCss = css`

body {
    margin: unset;
    padding: unset;
}

.main-container {
    background-color: gray;
    min-height: calc(100vh - 96px);
    min-width: calc(100vw - 96px);
    padding: 48px;
    display: block;
}

.main-container.print {
    padding: 0px !important;
}

.print .page {
    box-shadow: none;
}

.print .page-container {
    margin: 0px;
}

.page-number{
    height: 0px;
}

.page-container {
    max-width: 21cm;
    min-width: 21cm;
    max-height: 29.7cm;
    min-height: 29.7cm;
    margin-bottom: 1cm;
}

.page {
    max-width: 21cm;
    min-width: 21cm;
    max-height: 29.7cm;
    min-height: 29.7cm;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0.25cm 0.25cm 0.4cm;
}



.section {
    padding-left: 2cm;
    padding-right: 2cm;
}

.section:first-child {
    padding-top: 2cm;
}

.section:last-child {
    padding-bottom: 2cm;
}

.section.footer {
    flex: auto;
    display: flex;
    flex-direction: column;
}

.footer-content {
    height: min-content;
    text-align: justify;
    color: #aaa;
}

.page-number {
    position: relative;
    top: -50px;
    display: inline-block;
    float: right;
    left: -40px;
    z-index: 100;
}

.section-content.column {
    display: flex;
    flex-direction: column;
}

.section-content.row {
    display: flex;
    flex-direction: row
}

.stretch {
	flex: auto;
}


.section-content.identity p {
    margin: 1px 0px
}

.identity-name {
    font-size: 32pt;
}

.identity-key {
    min-width: 120px;
}

.identity-key,
.identity-value {
    margin: 1px 0px;
}

.cv-annotation {
    color: gray;
}

.section-title {
    font-size: 18pt;
    font-weight: bold;
    border-bottom: 1mm solid red;
        padding: 2mm 3mm;
    background: #eee;
}

.subsection-title {
    font-size: 14pt
}

p {
    margin: 0px;
}

.page {
    color: #333;
}

.page .subsection-date {
    white-space: nowrap;
    font-size: 10pt;
    margin-left: 4mm;
    line-height: 17pt;
    min-width: 3cm;
}

.subsection-subtitle {
    font-size: 12pt;
    color: #888;
    margin-top: 1MM
}

.section.paragraph {
    padding-top: 6mm;
    padding-bottom: 6mm;
}

.subsection:not(:first-child) div.subsection-value {
    border-top: 0.6mm solid red;
    margin-top: 5mm;
    padding-top: 5mm;
}

.subsection:not(:first-child) .subsection-date {
    margin-top: 10.6mm;
}

.portrait,
.portrait img{
    max-width: 6cm;
    max-height: 7cm;
}

.subsection-subtitle {
    text-align: justify;
}

.identity-data {
    margin-top: 4mm;
}

.section-identity {
    background-color: #eee;
    padding-bottom: 12mm;
    border-bottom: 0.2mm solid #bbb;
}

.paragraph-title {
    background: #eee

}

.simple p {
    display: list-item;
    color: #444;
}

`;
