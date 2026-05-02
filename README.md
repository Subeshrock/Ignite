# Vyoma

**Vyoma** (Sanskrit: _sky_, _atmosphere_) is an open-source MicroVM Manager
powered by [cloud-hypervisor](https://github.com/cloud-hypervisor/cloud-hypervisor) + KVM.

Run OCI images with hardware-level isolation, under 150ms boot times.

## Features

- ⚡ Sub-150ms cold boot via cloud-hypervisor
- 📦 OCI / Docker image compatible — no conversion
- 🔒 True hardware isolation (KVM, own kernel per VM)
- 📸 Machine-state snapshots (CPU + RAM + disk)
- 🚀 Live migration with ~20–80ms downtime
- 💤 Hibernation to zero cost
- 🌐 Built-in clustering (VXLAN mesh)

## Organization

**GitHub:** [VyomaVM](https://github.com/VyomaVM)  
**Repo:** [VyomaVM/Vyoma](https://github.com/VyomaVM/Vyoma)

## License

Apache 2.0
