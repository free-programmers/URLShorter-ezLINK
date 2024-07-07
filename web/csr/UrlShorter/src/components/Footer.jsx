export default function Footer() {
    return (
        <>
            <footer class="flex items-center justify-center py-3 w-100 mt-3 bc-secondary rounded-xl" style={{ "box-shadow": "0 0 10px 1px var(--secondary)" }}>
                <div class="container-xxl">
                    <div class="mb-2 mb-md-0 text-center">
                        <span className="tc-white">
                            ©
                            Made with ☕ by
                            <a href="https://hyperclouds.ir" target="_blank" class="tc-primary fw-bolder "> HyperClouds </a>
                            (2024)
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}